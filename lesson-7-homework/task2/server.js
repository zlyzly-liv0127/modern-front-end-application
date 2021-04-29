let http = require('http')
let fs = require('fs')
let path = require('path')
let url = require('url')

const protocol = 'http'
const hostname = 'localhost'
const port = 3500

function svgPath(url) {
    return url.endsWith('.jpg') ? url : url.concat('.jpg')
}

function Request(req, res) {
    let pathname = url.parse(req.url).pathname
    let query = url.parse(req.url).query//存储了url中？后面的内容
    let public_path1 = path.resolve(__dirname, 'index.html');
    let public_path2 = path.resolve(__dirname, 'images');

    if (pathname === '/') {
        fs.readFile(public_path1 , (err, data) => {
            if (err) {
                return res.end('404 Not Found.')
            }
            res.end(data)
        })
    } 
    else if(pathname === '/favicon.ico'){
      return
    }
    else {
        console.log(pathname)
        const etag = req.headers['if-none-match']
        let urlPath = svgPath(path.join(public_path2, pathname))

        fs.stat(urlPath, (err, stat) => {
            if (err) {
                console.log(err)
                return res.end('404 Not Found.')
                
            }
            let mtime = stat.mtime.toString()//返回文件最后一次修改的时间，使用这个时间作为etag

            if (etag === mtime) {
                res.writeHead(304, {
                    'Cache-Control': query,
                    'Etag': mtime
                })
                return res.end('')
            } else {
                res.writeHead(200, {
                    'Cache-Control': query,
                    'Etag': mtime
                })
            }
            
            fs.readFile(urlPath, (err, data) => {
                if (err) {
                    console.log(err)
                    return res.end('404 Not Found.')          
                }
                res.end(data)
            })
        })
    }
}

http.createServer(Request).listen(port)
console.log(`Server is running on ${protocol}://${hostname}:${port} ...`)