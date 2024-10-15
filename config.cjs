// config.js
const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia05HdWxXVzlhSmxyd0o1Qm9OWnRWUS94a2VGZCtsSDdsRk8yaEZRK2FYUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRURxZXF5YjRnQTVpd09SM2JOdEh1cXkybExzSUExMXY5ZGFobXAxbkJnYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJTjlKSDJTVHMxYTljVzFobTRXVnZxSm52WWFpaWI3cktRK2EweEpobTNzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4TXJhS0U1Qm5FRWpMSk5IUEV2TW1ZNnNlU1NrUzhwSW5sbmxIVklWelUwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNNcE16VHhaNHV5dksvZTRBemtiSmc1YmwvUnQ5QTVSc24yVkFYbHZvbEE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijh2QXo4LzA1Z0JPaThqM25tR2lsbkpwTzlGVjNWanBYbjU4MmdVbUp6aDA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMktaYVA1TTMzVUtlMDNmTHFZcEkxazV5MUZEN0FNYldYcnNNdTNpSmtHRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRmg5N3A4Q3RZZlg5RndJeXVRcmxmd0R2cFNSVmFUTGhRUTNKRkh2TjdWVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9oTTd5bXFHOFMvTzVEM2tBZnNlT3BkV0tpWUtBVk54SFRhR3gyWk5OZ29YbzhNZDBvR0xyLzhzUEUydStqd3lNTFByM3JDNjRKWC9FZVNDNkMzRURRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTc5LCJhZHZTZWNyZXRLZXkiOiJiQ1pwYTNCc2Qvc3o5alJjbWxWUnhTdjF1YTZoRU15blRqUDVEWXprWlI4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJEYWo5bGYzd1NrTzlaQmN6aC1YaldBIiwicGhvbmVJZCI6IjNiMTRlOWE0LWU1ZDgtNDllMi05OTcxLTk2NDM0MmVhM2NmZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBeFFYVllkVHBGZVZQbHRjaWx5TWdpYVB1UTg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVkE1cXlWQ2lJRDY5UlZoNS9yaHZjREFWY3hBPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkZGTDdZSjJGIiwibWUiOnsiaWQiOiI5NDc3MzgyNDI2Njo0OUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiIuXG5cblxu8J2RrFxuXG5cblxuXG7wnZG5XG5cblxuXG5cbvCdkblcblxuXG5cblxu8J2RtlxuXG5cblxuXG7wnZG5XG5cblxuXG7wnZ+w8J2frPCdn7BcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxu8JKNmSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS3podzU4RkVLbUZ1TGdHR0FVZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiNEJMdDdpQUNFME5ISHdWT1VkQWV4TnZGY3g4RGZ2Zm9ITUNSZU9SMTRYYz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiRHRLQkY2cTlaWnorK3g2T3p0YXl0UC9lZ3A5U3hQRUgxaURnUUlnN2U1bkFVTFQ3ZHVOMTZJWjRuMlZnc3dTQVI4TTBERVU1VXMxeG5pMnFRQ2R4QkE9PSIsImRldmljZVNpZ25hdHVyZSI6Ims5MXFUVUdvOTBlUHI5UXZSSVl3UFlXWXJWempqOEx3ek5sZzN3djUwM2FUOHl1dUVGVG85MWdYRTVVZ09zZ3JuVXoxMmQ3RllOUU9RVGtNR04rdUNnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NzM4MjQyNjY6NDlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZUFTN2U0Z0FoTkRSeDhGVGxIUUhzVGJ4WE1mQTM3MzZCekFrWGprZGVGMyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyODk3MTQ0NywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFCb1MifQ==",
  PREFIX: process.env.PREFIX || '.',
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'true' : true, 
  AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === 'true' : false,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'true' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'false' : false,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'true' : false,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'false' : false,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'true' : false,
   /*auto block only for 212 */
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'false' : true,
  
  
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'true' : false, 
  NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'true' : true,
  MODE: process.env.MODE || "public",
  OWNER_NAME: process.env.OWNER_NAME || "Bera",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "94773824266",
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyCUPaxfIdZawsKZKqCqJcC-GWiQPCXKTDc",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : false, 
};


module.exports = config;
