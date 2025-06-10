/****
项目名称：拼图软件（Collage Maker+） 下载地址：https://apps.apple.com/cn/app/%E6%8B%BC%E5%9B%BE%E8%BD%AF%E4%BB%B6/id1553432214 更新日期：2025-06-10
*****************
rewrite_local ^https?://(api|user|vip|purchase).livintis.com/.* url script-response-body https://raw.githubusercontent.com/Review/Quit/main/Pintu.js
mitm hostname = *.livintis.com
****/
// 通用递归自动解锁脚本，适用于未知字段的会员/内购解锁 function unlockAll(obj) { for (let key in obj) { if (!obj.hasOwnProperty(key)) continue; if (typeof objkey === ‘object’ && objkey !== null) { unlockAll(objkey); } else if (typeof objkey === ‘boolean’) { objkey = true; } else if (typeof objkey === ‘number’) { // 处理时间戳或VIP等级等 if (key.toLowerCase().includes(‘expire’) || key.toLowerCase().includes(‘end’)) { objkey = 4092599349; // 2099-12-31 23:59:09 } else { objkey = 1; } } else if (typeof objkey === ‘string’) { if (key.toLowerCase().includes(‘vip’) || key.toLowerCase().includes(‘pro’) || key.toLowerCase().includes(‘member’)) { objkey = ‘Pro永久会员’; } if (key.toLowerCase().includes(‘expire’) || key.toLowerCase().includes(‘end’)) { objkey = ‘2099-12-31 23:59:59’; } if (key.toLowerCase().includes(‘ad’)) { objkey = ‘’; } } } }
var body = JSON.parse($response.body); unlockAll(body); $done({body: JSON.stringify(body)});
