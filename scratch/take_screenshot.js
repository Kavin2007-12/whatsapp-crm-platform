const http = require('http');
const { spawn } = require('child_process');
const fs = require('fs');

const chrome = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
  '--headless=new',
  '--no-sandbox',
  '--disable-gpu',
  '--remote-debugging-port=9222'
]);

setTimeout(async () => {
  try {
    const listRes = await new Promise((resolve, reject) => {
      const req = http.request({
        host: '127.0.0.1',
        port: 9222,
        path: '/json/new?http://localhost:3000/features',
        method: 'PUT'
      }, (res) => {
        let d = '';
        res.on('data', c => d += c);
        res.on('end', () => resolve(JSON.parse(d)));
      });
      req.on('error', reject);
      req.end();
    });

    console.log('Page created:', listRes.id, listRes.webSocketDebuggerUrl);

    // Use WebSocket to navigate and take screenshot
    // Or simpler: let the browser load and use Page.captureScreenshot
    const WS = globalThis.WebSocket;
    const ws = new WS(listRes.webSocketDebuggerUrl);

    ws.onopen = () => {
      console.log('WS connected');
      ws.send(JSON.stringify({
        id: 1,
        method: 'Emulation.setDeviceMetricsOverride',
        params: { width: 1440, height: 800, deviceScaleFactor: 1, mobile: false }
      }));

      setTimeout(() => {
        ws.send(JSON.stringify({
          id: 2,
          method: 'Page.captureScreenshot',
          params: { format: 'png' }
        }));
      }, 3500);
    };

    ws.onmessage = (event) => {
      const resp = JSON.parse(event.data.toString());
      if (resp.id === 2 && resp.result && resp.result.data) {
        fs.writeFileSync('C:/Users/HP/.gemini/antigravity/brain/6a552a7c-0157-4dc5-8d94-a04665e4c1ee/scratch/rendered_live.png', Buffer.from(resp.result.data, 'base64'));
        console.log('Screenshot successfully saved to rendered_live.png!');
        ws.close();
        chrome.kill();
        process.exit(0);
      }
    };

  } catch (err) {
    console.error('Err:', err);
    chrome.kill();
    process.exit(1);
  }
}, 1500);
