(async()=>{function u(e){e=e?.style.background?.trim()?.match(/(?!^)".*?"/g);return e&&0!==e.length?e[0].replaceAll('"',""):null}async function h(){var e=document.querySelector("h2.prompt-text")?.innerText?.replace(/\s+/g," ")?.trim();if(!e)return null;var t={"0430":"a","0441":"c","0501":"d","0065":"e","0435":"e","04bb":"h","0069":"i","0456":"i","0458":"j","03f3":"j","04cf":"l","03bf":"o","043e":"o","0440":"p","0455":"s","0445":"x","0443":"y","0335":"-"};var a=[];for(const i of e){var c=function(e,t,a){for(;(""+e).length<a;)e=""+t+e;return e}(i.charCodeAt(0).toString(16),"0",4);a.push(c in t?t[c]:i)}return a.join("")}let d=null;async function e(){"block"===document.querySelector("div.check")?.style.display?a=a||!0:(a=!1,await Time.sleep(500),document.querySelector("#checkbox")?.click())}async function t(){"EN"!==document.querySelector(".display-language .text").textContent&&(document.querySelector(".language-selector .option:nth-child(23)").click(),await Time.sleep(500));e=500;var e,{task:t,cells:a,urls:c}=await new Promise(o=>{let r=!1;const s=setInterval(async()=>{if(!r){r=!0;var e=await h();if(e){var t=u(document.querySelector(".challenge-example > .image > .image"));if(t&&""!==t){var a=document.querySelectorAll(".task-image");if(9===a.length){var c=[],i=[];for(const l of a){var n=l.querySelector("div.image");if(!n)return void(r=!1);n=u(n);if(!n||""===n)return void(r=!1);c.push(l),i.push(n)}a=JSON.stringify(i);if(d!==a)return d=a,clearInterval(s),r=!1,o({task:e,task_url:t,cells:c,urls:i})}}}r=!1}},e)}),i=await BG.exec("Settings.get");if(i.enabled&&i.hcaptcha_auto_solve){var n=Time.time(),{data:l,metadata:t}=await NopeCHA.post({captcha_type:IS_DEVELOPMENT?"hcaptcha_dev":"hcaptcha",task:t,image_urls:c,key:i.key});if(l){o&&o.postMessage({event:"NopeCHA.metadata",metadata:t});c=parseInt(i.hcaptcha_solve_delay_time)||3e3,t=i.hcaptcha_solve_delay?c-(Time.time()-n):0;0<t&&await Time.sleep(t);for(let e=0;e<l.length;e++)!1!==l[e]&&"true"!==a[e].getAttribute("aria-pressed")&&a[e].click();await Time.sleep(200);try{document.querySelector(".button-submit").click()}catch(e){}}}}let a=!1,c=!1,o=null;for(;;){await Time.sleep(1e3);var i,n=await BG.exec("Settings.get");n&&n.enabled&&(i=await Location.hostname(),n.disabled_hosts.includes(i)||(c||null!==o||(window.addEventListener("message",e=>{"NopeCHA.hook"===e.data.event&&(o=e.source)}),window.location.hash.includes("frame=challenge")&&(c=!0,"firefox"===await BG.exec("Browser.version")?await Script.inject_file("hcaptcha_hook.js"):await BG.exec("Inject.files",{files:["hcaptcha_hook.js"]}))),n.hcaptcha_auto_open&&0!==document.body.getBoundingClientRect()?.width&&0!==document.body.getBoundingClientRect()?.height&&null!==document.querySelector("div.check")?await e():n.hcaptcha_auto_solve&&null!==document.querySelector("h2.prompt-text")&&await t()))}})();
