((t,e,i)=>{"use strict";let o=document.currentScript.src.split(".js")[0].replace("assets/builder-active","");o.endsWith("/")||(o+="/"),e.on("tb_layout_loaded",(i=>{new class extends i{constructor(){const t="popup";super(t),this.id=t,this.title=themifyPopupBuilder.title}getList(){const t=themifyPopupBuilder.data,e=[],i=o+"sample/",s=t=>{const e=t.replace(/  +/g," ").split(" ");for(let t=0;t<e.length;++t)e[t]=e[t].charAt(0).toUpperCase()+e[t].slice(1);return e.join(" ")};for(let o=0;o<t.length;++o){let r=t[o].replace(".zip","");e[o]={title:s(r.replaceAll("-"," ")),slug:r,thumbnail:i+r+".webp"}}return Promise.resolve(e)}async getItem(i){const s=[t.Helper.loadJsZip()];s.push(e.fetch("","blob",{credentials:"omit",method:"GET",mode:"cors",headers:{"Content-Type":"application/zip"}},o+"sample/"+i+".zip"));const r=await Promise.all(s),a=await JSZip.loadAsync(r[1]),l=a.files;if(l){const t="builder_data_export.txt",e="builder_gs_data_export.txt";if(void 0!==l[t]){const i=[];i.push(a.file(l[t].name).async("text")),void 0!==l[e]&&i.push(a.file(l[e].name).async("text"));const o=await Promise.all(i),s=JSON.parse(o[0]),r={builder_data:s.builder_data||s};return o[1]&&(r.used_gs=JSON.parse(o[1])),r}throw themifyBuilder.i18n.importBuilderNotExist}throw themifyBuilder.i18n.zipFileEmpty}}}),!0)})(tb_app,Themify);