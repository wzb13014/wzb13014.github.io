// ========================================================================
//  网址库 · 增强版 script.js
//  新增：localStorage 持久化、增删改(CRUD)、收藏、访问统计、
//       卡片/列表视图、紧凑密度、favicon、复制链接、最近访问、
//       导入导出、拖拽排序、搜索增强、快捷键、右键菜单、Toast
// ========================================================================

// ========================================================================
//  内联 SVG 图标（不依赖任何外部字体 / CDN，永远显示）
// ========================================================================
const ICONS = {
    star:    '<svg class="icon-svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>',
    starOff: '<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>',
    compress:'<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="4 14 4 20 10 20"></polyline><line x1="10" y1="20" x2="4" y2="14"></line><polyline points="20 10 20 4 14 4"></polyline><line x1="14" y1="4" x2="20" y2="10"></line><polyline points="14 14 14 20 20 20"></polyline><line x1="14" y1="20" x2="20" y2="14"></line><polyline points="4 10 4 4 10 4"></polyline><line x1="4" y1="10" x2="10" y2="4"></line></svg>',
    image:   '<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>',
    keyboard:'<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="6" width="20" height="12" rx="2"></rect><line x1="6" y1="10" x2="6" y2="10"></line><line x1="10" y1="10" x2="10" y2="10"></line><line x1="14" y1="10" x2="14" y2="10"></line><line x1="18" y1="10" x2="18" y2="10"></line><line x1="7" y1="14" x2="17" y2="14"></line></svg>',
    times:   '<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><line x1="6" y1="6" x2="18" y2="18"></line><line x1="18" y1="6" x2="6" y2="18"></line></svg>',
    chart:   '<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><line x1="4" y1="20" x2="20" y2="20"></line><rect x="6" y="11" width="3" height="7"></rect><rect x="11" y="6" width="3" height="12"></rect><rect x="16" y="13" width="3" height="5"></rect></svg>',
    link:    '<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>',
    external:'<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>',
    copy:    '<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="11" height="11" rx="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>',
    edit:    '<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>',
    trash:   '<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>',
    locate:  '<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>',
    inbox:   '<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path></svg>',
    history: '<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 3v5h5"></path><path d="M3.05 13A9 9 0 1 0 6 5.3L3 8"></path><polyline points="12 7 12 12 15 15"></polyline></svg>',
    check:   '<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>',
    info:    '<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>',
    warn:    '<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>',
    folder:  '<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>'
};

// ========================================================================
//  默认数据（首次运行播种，之后以 localStorage 为准）
// ========================================================================
const RAW_DATA = [{
    id: 1, title: "国际标准", icon: "fa-flag", websites: [
        { name: "ISO官网", url: "https://www.iso.org/iso-update.html", desc: "国际标准化组织" },
        { name: "ISO", url: "https://www.iso.org/obp/ui/en#home", desc: "在线浏览平台（OBP）ISO查询术语" },
        { name: "IEC官网", url: "https://webstore.iec.ch/", desc: "电工电子领域国际标准" },
        { name: "IEC", url: "https://www.electropedia.org/", desc: "IEC电工电子词典" },
        { name: "IPC", url: "https://www.ipc.org.cn/standards", desc: "国际电子工业联接协会" },
        { name: "UKCA", url: "https://www.gov.uk/guidance/placing-ukca-or-ce-marked-products-on-the-market-in-great-britain", desc: "UKCA标志" },
        { name: "ITU", url: "https://www.itu.int/en/ITU-T/Pages/default.aspx", desc: "全球电信标准化" },
        { name: "IAF", url: "https://iaf.nu/en/home/", desc: "国际认证论坛" },
        { name: "ZDHC", url: "https://www.roadmaptozero.com/mrsl?locale=zh_cn#CG", desc: "限用清单/程序/指南/实施方法" },
        { name: "ECHA", url: "https://echa.europa.eu/", desc: "欧洲化学品管理局" },
        { name: "EUL", url: "https://www.who.int/teams/regulation-prequalification/eul/", desc: "WHO白名单" },
        { name: "GRS", url: "https://textileexchange.org/recycled-claim-global-recycled-standard/", desc: "全球回收标准" },
        { name: "UNECE", url: "https://unece.org/ghs-rev4-2011", desc: "GHS全球化学品统一分类和标签制度" },
        { name: "EN标准", url: "https://www.cencenelec.eu/", desc: "EN欧洲标准" },
        { name: "EASA", url: "https://www.easa.europa.eu/en/acceptable-means-compliance-and-guidance-material-group/part-21-airworthiness-and-environmental", desc: "欧洲航空安全局" },
        { name: "ASEAN DOCS", url: "https://docs.asean.org/SitePages/DocumentSearch.aspx", desc: "指南文件检索" },
        { name: "CE认证", url: "https://single-market-economy.ec.europa.eu/single-market/goods/ce-marking_en", desc: "产品认证" },
        { name: "FCC认证", url: "https://www.fcc.gov/", desc: "产品认证" },
        { name: "UL Solutions", url: "https://www.ul.com/", desc: "产品认证" },
        { name: "UL认证", url: "https://www.shopulstandards.com/", desc: "UL标准" },
        { name: "WTO", url: "https://www.wto.org/english/res_e/res_e.htm", desc: "世界贸易组织" }, 
        { name: "UNSD", url: "https://unstats.un.org/UNSDWebsite/", desc: "联合国统计局" },
    ]
}, {
    id: 2, title: "国家标准", icon: "fa-book", websites: [
        { name: "全国标准信息公共服务平台", url: "https://std.samr.gov.cn/", desc: "国家/行业/地方/团体/企业/国际/国外标准" },
        { name: "国家标准全文公开系统", url: "https://openstd.samr.gov.cn/bzgk/gb/index", desc: "GB/GBT/GBZ" },
        { name: "国际国家标准互查", url: "https://std.samr.gov.cn/gb/search/gbAdvancedSearch?type=std", desc: "ISO标准号查找国家标准号" },
        { name: "国家计量技术规范公开系统", url: "http://jjg.spc.org.cn/", desc: "JJG/JJF标准下载" },
        { name: "中国国家标准化管理委员会", url: "https://www.sac.gov.cn/", desc: "中国国家标准化管理委员会" },
        { name: "中国政府网", url: "https://www.gov.cn/", desc: "中国政府网" },
        { name: "ISO标准", url: "https://www.sacinfo.cn/s/std?p.p1=ISO", desc: "标准查询" },
        { name: "ISO标准2", url: "https://std.samr.gov.cn/gj/std?op=ISO", desc: "标准查询" },
        { name: "IEC标准", url: "https://www.sacinfo.cn/s/std?p.p1=IEC", desc: "标准查询" },
        { name: "IEC标准2", url: "https://std.samr.gov.cn/gj/std?op=IEC", desc: "标准查询" },
        { name: "中国标准信息服务网", url: "https://www.sacinfo.cn/", desc: "标准文档检索" },
    ]
}, {
    id: 3, title: "行业标准", icon: "fa-industry", websites: [
        { name: "行业标准信息服务平台", url: "https://hbba.sacinfo.org.cn/", desc: "行标综合平台" },
        { name: "食品安全国家标准数据检索平台", url: "https://sppt.cfsa.net.cn:8086/db", desc: "GB/GBT/GBJ标准下载" },
        { name: "化学品安全法规标准信息平台", url: "https://law.chemicalsafety.org.cn/", desc: "化学品标准下载" },
        { name: "自然资源标准化信息服务平台", url: "http://www.nrsis.org.cn/portal/xxcx/std", desc: "TDT/TD/HYT/CHT/CH标准下载" },
        { name: "铁路技术标准信息服务平台", url: "https://biaozhun.tdpress.com/", desc: "TB标准下载" },
        { name: "认证认可标准化信息服务平台", url: "http://rbtest.cnca.cn/portal/xxcx/std", desc: "GBT/RBT标准下载" },
        { name: "国家食品安全风险评估中心", url: "https://cfsa.net.cn/spaqbz/index.shtml", desc: "" },
        { name: "国家认证认可监督管理委员会", url: "https://www.cnca.gov.cn/", desc: "认证机构查询" },
        { name: "司法部政务服务平台", url: "https://zwfw.12348.gov.cn/?type=govCallbackTicket&flag=false&url=biiii.com", desc: "" }, 
        { name: "体育标准化信息平台", url: "http://125.35.8.38/tybz/home/standard", desc: "标准" },
        { name: "国家工程建设标准化信息网", url: "https://www.ccsn.org.cn/", desc: "GB/GBT/GBJ标准下载" },
        { name: "国务院政策文件库", url: "https://sousuo.www.gov.cn/zcwjk/policyDocumentLibrary?q=&t=zhengcelibrary&orpro=", desc: "中华人民共和国中央人民政府" },
        { name: "中央人民政府", url: "https://www.gov.cn/", desc: "中央人民政府" },
        { name: "国家行政法规库", url: "https://www.gov.cn/zhengce/xzfgk/", desc: "中华人民共和国中央人民政府" },
        { name: "中国电力企业联合会", url: "https://dls.cec.org.cn/zhongdianlianbiaozhun/", desc: "TCEC标准下载" },
        { name: "中国物流与采购联合会", url: "http://wlbz.chinawuliu.com.cn/bzxmjh/", desc: "WB标准下载" },
        { name: "中国证券监督管理委员", url: "https://www.csrc.gov.cn/", desc: "标准" },
        { name: "全国金融标准化技术委员会", url: "https://cfstc.pbc.gov.cn/bzgk/", desc: "标准" },
        { name: "密码行业标准化技术委员会", url: "http://www.gmbz.org.cn/main/bzlb.html", desc: "标准" },
        { name: "国家发展和改革委员会", url: "https://www.ndrc.gov.cn/", desc: "国家发展和改革委员会" },
        { name: "海关总署技贸措施网", url: "http://www.tbtsps.cn", desc: "GB/GBT/GBZ/GA/GAT/DB/LDT/WST/DAT/YYT/T../RBT/DL../HJ/JBT/QCT标准下载" },
        { name: "中国海关企业进出口信用信息", url: "http://credit.customs.gov.cn/ccppwebserver/pages/ccpp/html/ccppindex.html", desc: "中国海关企业进出口信用信息公示平台" },
        { name: "资本市场标准网", url: "http://www.csisc.cn/zbscbzw/c100208/yfb_gb_list.shtml#bzyfb", desc: "JR标准下载" },
        { name: "水利部国际合作与科技司", url: "http://gjkj.mwr.gov.cn/jsjd1/bzh/bzhfbgg/index.htm", desc: "SL标准" },    
        { name: "国家体育总局", url: "https://www.sport.gov.cn/gdnps/", desc: "" },   
        { name: "国家金融监督管理总局", url: "https://www.nfra.gov.cn/cn/view/pages/zhengwuxinxi/zhengfuxinxi.html?signIndex=0#1", desc: "" },       
        { name: "国家文物局", url: "http://www.ncha.gov.cn/col/col2423/index.html", desc: "WWT标准下载" },
        { name: "矿山安全监察局", url: "https://www.chinamine-safety.gov.cn/zfxxgk/fdzdgknr/zcfg/hybz_01/mkanj/", desc: "MTT/MT标准下载" },
        { name: "中国气象局", url: "https://www.cma.gov.cn/", desc: "标准" },
        { name: "交通水利局", url: "https://wtis.mot.gov.cn/syportalapply/sysnoticezl/indexzl", desc: "JTS标准下载" },
        { name: "交通运输部公路局", url: "https://xxgk.mot.gov.cn/2020/jigou/?gk=5", desc: "JTG标准下载" },
        { name: "国家邮政局", url: "https://www.spb.gov.cn/gjyzj/c100009/c100012/common_list.shtml", desc: "YZ标准下载" },
        { name: "国家广播电视总局", url: "http://www.nrta.gov.cn/col/col3715/index.html", desc: "GYT/GYJ标准下载" },
        { name: "民用航空局", url: "https://www.caac.gov.cn/XXGK/XXGK/index_172.html?fl=15", desc: "CTSO/MHT/SC/JJF标准下载" },
        { name: "国家气象局", url: "https://www.cma.gov.cn/zfxxgk/gknr/flfgbz/bz/index_4.html", desc: "QX/IDM标准下载" },
        { name: "中国地震局", url: "https://www.cea.gov.cn/cea/index/index.html?url=biiii.com", desc: "" }, 
        { name: "国家粮食和物资储备局", url: "https://www.lswz.gov.cn/html/ywpd/bzzl/lybz.shtml", desc: "LST标准下载" },
        { name: "国家档案局", url: "https://www.saac.gov.cn/daj/hybz/dabz_list.shtml", desc: "DA标准下载" },
        { name: "国家林业和草原局", url: "https://www.forestry.gov.cn/govpublic-index.htm", desc: "" },
        { name: "国家医疗保障局", url: "https://gkml.ggj.gov.cn/", desc: "" },
        { name: "国家机关事务管理局", url: "https://www.ggj.gov.cn/", desc: "" },
        { name: "国家市场监督管理总局", url: "https://www.samr.gov.cn/", desc: "国家市场监督管理总局" },
        { name: "国家税务总局", url: "https://www.chinatax.gov.cn/", desc: "国家税务总局" },
        { name: "国家知识产权局", url: "http://www.cnipa.gov.cn/", desc: "国家知识产权局" },
        { name: "国家能源局", url: "https://www.nea.gov.cn/", desc: "" },
        { name: "国家国防科技工业局", url: "https://www.sastind.gov.cn/", desc: "" },
        { name: "国家烟草专卖局", url: "www.tobacco.gov.cn", desc: "" },
        { name: "国家移民管理局", url: "https://www.nia.gov.cn/", desc: "" },
        { name: "国家铁路局", url: "https://www.nra.gov.cn/", desc: "" },
        { name: "中国民用航空局", url: "https://www.caac.gov.cn/index.html", desc: "" },
        { name: "国家航天局", url: "https://www.cnsa.gov.cn/", desc: "" },
        { name: "国家信访局", url: "https://www.gjxfj.gov.cn/gjxfj/index.htm", desc: "" },
        { name: "国家宗教事务局", url: "https://www.sara.gov.cn/", desc: "" },
        { name: "国家消防救援局", url: "https://www.119.gov.cn/", desc: "" },
        { name: "国家密码管理局", url: "http://www.nca.gov.cn/", desc: "" },
        { name: "国家公务员局", url: "http://bm.scs.gov.cn/pp/gkweb/core/web/ui/business/home/gkhome.html?url=biiii.com", desc: "" },
        { name: "国家核安全局", url: "https://nnsa.mee.gov.cn/", desc: "" },
        { name: "司法部", url: "http://www.moj.gov.cn/", desc: "司法部" },
        { name: "财政部", url: "http://www.mof.gov.cn/", desc: "财政部" },
        { name: "外交部", url: "https://www.fmprc.gov.cn/", desc: "外交部" },
        { name: "科学技术部", url: "https://www.most.gov.cn/", desc: "科学技术部" },
        { name: "住房和城乡建设部", url: "https://www.mohurd.gov.cn/gongkai/fdzdgknr/bzgg/index.html", desc: "CJ/JC/JG标准下载" },
        { name: "港澳办", url: "https://www.hmo.gov.cn/xxgk_new/gkzd/", desc: "标准下载" },
        { name: "农业农村部", url: "https://www.moa.gov.cn/gk/", desc: "标准下载" },
        { name: "中华人民共和国工业和信息化部", url: "https://www.miit.gov.cn/search/zcwjk.html?websiteid=110000000000000&pg=&p=&tpl=14&category=183&q=", desc: "标准" },
        { name: "教育部", url: "http://www.moe.gov.cn/jyb_xxgk/xxgk/zhinan/", desc: "标准下载" },
        { name: "公安部", url: "https://app.mps.gov.cn/gdnps/zc/list.jsp", desc: "标准下载" },
        { name: "人力资源和社会保障部", url: "https://www.mohrss.gov.cn/SYrlzyhshbzb/zwgk/ghcw/bz/index.html", desc: "LDT标准下载" },
        { name: "自然资源部", url: "https://www.mnr.gov.cn/gk/", desc: "标准下载" },
        { name: "交通运输部", url: "https://jtst.mot.gov.cn/arch/prof", desc: "JT标准下载" },
        { name: "生态环境部", url: "https://www.mee.gov.cn/ywgz/gtfwyhxpgl/wxfw/", desc: "危险废物" },
        { name: "中华人民共和国商务部", url: "https://www.mofcom.gov.cn/", desc: "中华人民共和国商务部" },
        { name: "出口商品技术指南", url: "https://www.mofcom.gov.cn/cms_files/filemanager/ckzn/index.shtml", desc: "中华人民共和国商务部" },
        { name: "国家应急管理部", url: "https://www.mem.gov.cn/fw/flfgbz/bz/bzwb/", desc: "AQ/AQT/YGT/XFT/MT标准下载" },
        { name: "中华人民共和国商务部", url: "https://www.mem.gov.cn/fw/flfgbz/bz/bzwb/", desc: "SBT/WMT标准下载" },
        { name: "国家民政部", url: "https://www.mca.gov.cn/gdnps/pc/index.jsp?mtype=1", desc: "MZT标准下载" },
        { name: "国家生态环境部", url: "https://www.mee.gov.cn/ywgz/fgbz/bz/bzjd/", desc: "标准下载" },
        { name: "文化和旅游部", url: "https://zwgk.mct.gov.cn/zfxxgkml/447/471/index_3081.html", desc: "WHT/LBT标准下载" },
        { name: "中共中央对外联络部", url: "https://www.idcpc.gov.cn/", desc: "" },
        { name: "中共中央统一战线工作部", url: "https://www.zytzb.gov.cn/", desc: "" },
        { name: "中华人民共和国国防部", url: "http://www.mod.gov.cn/", desc: "" },
        { name: "中华人民共和国水利部", url: "http://www.mwr.gov.cn/", desc: "" },
        { name: "国家民族事务委员会", url: "https://www.neac.gov.cn/", desc: "" },
        { name: "国务院侨务办公室", url: "https://www.gqb.gov.cn/", desc: "" },
        { name: "国家国际发展合作署", url: "http://www.cidca.gov.cn/", desc: "" },
    ]
}, {
    id: 4, title: "地方标准", icon: "fa-map-marker-alt", websites: [
       { name: "地方标准信息服务平台", url: "https://dbba.sacinfo.org.cn/", desc: "标准下载" },
        { name: "北京市市场监督管理局", url: "https://scjgj.beijing.gov.cn/cxfw/", desc: "标准下载" },
        { name: "山西省市场监督管理局（知识产权局）", url: "https://scjgj.shanxi.gov.cn/gzzt/bzgl/dfbzcx/index.shtml", desc: "DB标准下载" },
        { name: "安徽省标准化信息服务", url: "https://bzxx.ahbz.org.cn/standInfo.html?tab=2", desc: "标准下载" },
        { name: "福建省标准信息服务平台", url: "http://pt.fjbz.org.cn:8060/StandardSearch/StdSearch.aspx", desc: "标准下载" },
        { name: "河南省地方标准公共服务平台", url: "http://www.hndb41.com/", desc: "标准下载" },
        { name: "成都市市场监督管理局（市知识产权局）", url: "https://scjg.chengdu.gov.cn/cdscjgj/c133654/nav_list.shtml", desc: "标准下载" },
        { name: "重庆市智慧市场监督一体化平台", url: "http://db.cqis.cn/LocalStandard/Index", desc: "标准下载" },
        { name: "四川省市场监督管理局（省知识/省食品）", url: "http://scjgj.sh.gov.cn/1468/", desc: "标准" },
        { name: "上海市市场监督管理局", url: "http://scjgj.sh.gov.cn/1468/", desc: "标准" },
        { name: "浙江标准在线", url: "https://zlzx.zjamr.zj.gov.cn/bzzx/", desc: "标准" },
        { name: "内蒙古标准文献公共服务平台", url: "http://www.imisinfo.cn/#/", desc: "标准" },
        { name: "江西省质量和标准化研究院", url: "http://www.jxbz.org.cn/ZJHome/LocalStandard?TID=35", desc: "标准" },
        { name: "甘肃省地方标准全文公开信息平台", url: "http://www.gsdfbz.cn/theme/default/index", desc: "标准" },
        { name: "湖南省地方标准网", url: "https://db43.hnbzw.com/", desc: "标准" },
        { name: "深圳市人力资源和社会保障局", url: "https://hrss.sz.gov.cn/", desc: "标准" },
        { name: "深圳市中小企业服务局", url: "https://zxqyj.sz.gov.cn/", desc: "标准" },
    ]
}, {
    id: 5, title: "团体标准", icon: "fa-users", websites: [
       { name: "全国团体标准信息平台", url: "https://www.ttbz.org.cn/Home/Standard", desc: "标准下载" },
        { name: "中关村材料试验技术联盟", url: "http://www.cstm.com.cn/channel/details/3-1-cstmbiaozhun?page=1", desc: "CSTM标准下载" },
        { name: "中国航空器拥有者及驾驶员协会", url: "https://www.aopa.org.cn/portal/modules/group/2", desc: "TAOPA标准下载" },
        { name: "中国教育装备行业协会", url: "https://www.ceeia.cn/news/55/", desc: "TJYBZ标准下载" },
        { name: "中国锻压协会", url: "http://www.china-metalforming-fabrication.com/bz/bz0", desc: "TCCMI标准下载" },
        { name: "中国家用纺织品行业协会", url: "https://npoall.com/", desc: "标准" },
        { name: "中国焊接协会", url: "http://www.china-weldnet.com/specialist-standard", desc: "标准下载" },
        { name: "中国家用电器协会", url: "https://www.cheaa.org/channels/419.html", desc: "标准下载" },
        { name: "中国食品工业协会", url: "https://www.cnfia.cn/archives/20486", desc: "标准下载" },
    ]
}, {
    id: 6, title: "各国标准", icon: "fa-solid fa-scale-balanced", websites: [
        { name: "IEEE", url: "https://www.ieee.org/", desc: "美国电气电子工程学会" },
        { name: "OSHA的国家认可测试实验室 (NRTL) 计划", url: "https://www.osha.gov/nationally-recognized-testing-laboratory-program", desc: "美国劳工部" },
        { name: "ASQ", url: "https://asq.org/", desc: "美国质量协会" },
        { name: "GovInfo", url: "https://www.govinfo.gov/", desc: "美国政府出版局" },
        { name: "ASTM标准", url: "https://store.astm.org/products-services/standards-and-publications/standards.html", desc: "美国材料实验协会" },
        { name: "CPSIA", url: "https://www.cpsc.gov/Regulations-Laws--Standards/Statutes/The-Consumer-Product-Safety-Improvement-Act", desc: "美国消费品安全委员会" },
        { name: "CTPAT", url: "https://www.cbp.gov/border-security/ports-entry/cargo-security/ctpat-customs-trade-partnership-against-terrorism/apply/security-criteria", desc: "美国海关-商贸反恐伙伴计划" },
        { name: "NHTSA", url: "https://www.nhtsa.gov/laws-regulations", desc: "美国国家公路交通安全管理局" },
        { name: "日本标准", url: "https://www.sacinfo.cn/s/std?p.p1=JIS", desc: "标准查询" },
        { name: "JAS", url: "https://www.maff.go.jp/j/jas/jas_kikaku/yuuki.html#kikaku", desc: "日本有机标准" },
        { name: "UKAS", url: "https://www.ukas.com/", desc: "英国皇家认可委员会" },
        { name: "德国标准", url: "https://www.sacinfo.cn/s/std?p.p1=DIN", desc: "标准查询" },
        { name: "Blue Angel", url: "https://www.blauer-engel.de/en/certification/basic-award-criteria#UZ34-2017", desc: "德国蓝色天使生态认证标准" },
        { name: "韩国标准", url: "https://www.sacinfo.cn/s/std?p.p1=KS", desc: "标准查询" },
        { name: "韩国政府官方网站", url: "https://plus.gov.kr/", desc: "法律法令" },
        { name: "法国标准", url: "https://www.sacinfo.cn/s/std?p.p1=AFNOR", desc: "标准查询" },
        { name: "瑞士联邦法律", url: "https://www.fedlex.admin.ch/eli/cc/2020/552/en", desc: "瑞士法规" },
        { name: "越南政府官方网站", url: "https://chinhphu.vn/", desc: "法律法令" },
        { name: "荷兰政府官方网站", url: "https://www.overheid.nl/", desc: "法律法令" },
        { name: "印度政府官方网站", url: "https://www.india.gov.in/", desc: "法律法令" },
        { name: "挪威的法律信息网站", url: "https://lovdata.no/", desc: "法律法令" },
        { name: "西班牙标准", url: "https://www.sacinfo.cn/s/std?p.p1=AENOR", desc: "标准查询" },
        { name: "白俄罗斯标准", url: "https://www.sacinfo.cn/s/std?p.p1=BELST", desc: "标准查询" },
        { name: "俄罗斯标准", url: "https://www.sacinfo.cn/s/std?p.p1=GOSTR", desc: "标准查询" },
    ]
}, {
    id: 7, title: "其他标准", icon: "fa-file-alt", websites: [
       { name: "企业标准信息公共服务平台", url: "https://www.qybz.org.cn/", desc: "标准下载" },
        { name: "特种设备安全检查局", url: "https://www.samr.gov.cn/tzsbj/zcfg/aqjsgf/index.html", desc: "安全技术规范" },
        { name: "国家统计局", url: "https://www.stats.gov.cn/", desc: "标准" },
        { name: "中国民用航空适航审定中心", url: "https://acc.caac.gov.cn/ZCFG/index.html", desc: "航空政策法规" },
        { name: "RBA", url: "https://www.responsiblebusiness.org/code-of-conduct/", desc: "责任商业联盟行为准则-标准" },
        { name: "EMAS", url: "https://green-forum.ec.europa.eu/green-business/emas_en", desc: "生态管理与审计计划" },
        { name: "GOTS标准", url: "https://global-standard.org/downloads", desc: "全球有机纺织标准" },
        { name: "BSCI标准", url: "https://www.amfori.org/document_solution/amfori-bsci/?section=members", desc: "amfori" },
        { name: "SMETA标准", url: "https://www.sedex.com/zh/", desc: "sedex-需登录" },
        { name: "COSMOS标准", url: "https://www.cosmos-standard.org/zh-hans/documents/", desc: "标准" },
        { name: "BRC标准", url: "https://www.brcgs.com/china/%E6%A6%82%E8%BF%B0/", desc: "标准" },
        { name: "IFS HPC标准", url: "https://www.ifs-certification.com/en/ifs-portfolio/standards/hpc-standard", desc: "标准" },
        { name: "FSC认证", url: "https://connect.fsc.org/document-centre", desc: "森林认证标准" },
        { name: "ESCP", url: "https://www.ethicalsupplychain.org/zh/resource/factory/audit-checklist", desc: "供应链责任规范标准" },
        { name: "EPEAT 2.0标准", url: "https://www.epeat.net/about/epeat-criteria", desc: "电子产品环境影响评估" },
        { name: "ICS", url: "https://ics-asso.org/resources/#1617967310959-18ea5aee-152a", desc: "合规与可持续发展倡议" },
        { name: "NATRUE", url: "https://natrue.org/our-standard/documents/", desc: "天然有机化妆品认证标准" },
        { name: "TRUE", url: "https://true.gbci.org/resources", desc: "零废弃物认证标准" },
        { name: "PCI", url: "https://natrue.org/our-standard/documents/", desc: "PCI安全标准委员会" },
        { name: "AWS", url: "https://a4ws.org/", desc: "国际可持续水管理标准" },
        { name: "LEED", url: "https://www.gbci.org/china", desc: "绿色建筑认证" },
        { name: "TAPA", url: "https://tapa.memberclicks.net/freight-broker-security-requirements-fbsr-", desc: "运输资产保护协会" },
        { name: "FAMI QS", url: "https://fami-qs.org/scheme-documents/#practice", desc: "饲料安全" },
        { name: "BAP", url: "https://www.bapcertification.org/Standards", desc: "最佳水产养殖实践" },
        { name: "OEKO-TEX Standard 100", url: "https://www.oeko-tex.com/zh/%E4%B8%8B%E8%BD%BD/", desc: "纺织品有害物质检测" },
        { name: "ASC", url: "https://programme-centre.asc-aqua.org/resource-hub/?rname&type%5B0%5D=Standard", desc: "水产养殖管理委员会" },
        { name: "WMO", url: "https://wmo.int/zh-hans", desc: "世界气象组织" },
        { name: "MSC", url: "https://www.msc.org/standards-and-certification/fisheries-standard", desc: "渔业标准|海洋管理委员会" },
        { name: "Energy Star", url: "https://www.energystar.gov/", desc: "能源之星" },
        { name: "Nordic Swan", url: "https://www.nordic-swan-ecolabel.org/criteria/", desc: "北欧白天鹅生态标志" },
        { name: "Fairtrade", url: "https://www.fairtrade.net/en/why-fairtrade/how-we-do-it/standards/who-we-have-standards-for.html", desc: "公平贸易认证标准" },
        { name: "BCI", url: "https://bettercotton.org/what-we-do/defining-better-our-standard/", desc: "良好棉花倡议" },
        { name: "WRAP", url: "https://wrapcompliance.org/en/certification/", desc: "全球责任服装生产认证标准" },
        { name: "ISCC", url: "https://iscc-system.org/certification/iscc-documents/", desc: "国际可持续性和碳认证标准" },
        { name: "Common Criteria", url: "https://www.commoncriteriaportal.org/cc/index.cfm", desc: "信息技术安全评估标准" },
        { name: "TISAX认证", url: "https://www.commoncriteriaportal.org/cc/index.cfm", desc: "ENX可信信息安全评估交换" },
        { name: "SLCP", url: "https://slcp.zendesk.com/hc/en-us/articles/6894013905692-Download-Verifier-Guidance-how-do-I-verify-a-facility-s-answer-to-a-Tool-question", desc: "社会劳工整合标准" },
        { name: "UNGC", url: "https://cn.unglobalcompact.org/index.html", desc: "联合国全球契约组织" },
        { name: "ILO", url: "https://normlex.ilo.org/dyn/nrmlx_en/f?p=NORMLEXPUB:12000:0::NO:::", desc: "国际劳工组织-劳工标准" },
        { name: "ILO公约全文", url: "https://cn.fsc.org/cn-zh/ilohexinlaogongyaoqiuxiangguanfalufagui/ilogongyuequanwen", desc: "ILO公约全文" },
        { name: "ESG标准", url: "https://ohesg.com/", desc: "标准" },
        { name: "CDP", url: "https://cdp.net/zh/disclose/question-bank", desc: "碳信息披露项目-ESG相关标准" },
        { name: "GRI标准", url: "https://www.globalreporting.org", desc: "GRI标准下载-ESG相关标准" },
        { name: "CDSB", url: "https://www.cdsb.net/", desc: "气候披露标准委员会-ESG相关标准" },
        { name: "SASB标准", url: "https://navigator.sasb.ifrs.org/", desc: "可持续会计准则-ESG相关标准" },
        { name: "ISSB", url: "https://www.ifrs.org/", desc: "国际可持续发展准则委员会-ESG相关标准" },
        { name: "TCFD", url: "https://www.fsb-tcfd.org/publications/", desc: "气候相关财务信息披露-ESG相关标准" },
        { name: "IFRS S2气候相关披露", url: "https://www.ifrs.org/issued-standards/ifrs-sustainability-standards-navigator/ifrs-s2-climate-related-disclosures/#about", desc: "IFRS S2气候相关披露-ESG相关标准" },
        { name: "IFRS S1可持续发展相关财务信息披露的一般要求", url: "https://www.ifrs.org/issued-standards/ifrs-sustainability-standards-navigator/ifrs-s1-general-requirements/", desc: "IFRS S1可持续发展相关财务信息披露的一般要求-ESG相关标准" },
        { name: "OECD", url: "https://www.oecd.org/zh/publications/12182cb3-zh.html", desc: "经合组织跨国企业负责任商业行为准则-ESG相关标准" },
        { name: "ISO26000", url: "https://www.iso.org/iso-26000-social-responsibility.html", desc: "社会责任指南-ESG相关标准" },
        { name: "IIRC", url: "https://integratedreporting.org", desc: "国际综合报告框架-ESG相关标准" },
        { name: "IETP", url: "https://www.ethicalsupplychain.org/resource/factory/audit-checklist", desc: "IETP社会责任合规标准-ICTI审厂-ESG评级相关" },
        { name: "WRAP认证", url: "https://wrapcompliance.org/zh/certification/certification-explained/", desc: "WRAP认证实施手册-ESG评级相关" },
        { name: "SA8000", url: "https://sa-intl.org/resources/sa8000-standard/", desc: "社会责任-ESG评级相关" },
        { name: "SLCP 审计", url: "https://slcp.zendesk.com/hc/en-us/articles/6808698730780-Download-Data-Collection-Tool-which-questions-are-included-in-the-Tool", desc: "SLCP审计清单工具-ESG评级相关" },
        { name: "PSCI审计", url: "https://pscinitiative.org/resource?resource=1", desc: "PSCI原则-ESG评级相关" },
        { name: "EcoVadis审计", url: "https://ecovadis.cn/", desc: "EcoVadis审计-ESG评级相关" },
        { name: "TfS 审计", url: "https://www.tfs-initiative.com/how-we-do-it/audit#documents", desc: "TfS 审计清单-ESG评级相关" },
        { name: "FIPS 140-2", url: "https://csrc.nist.gov/pubs/fips/140-2/upd2/final", desc: "加密模块验证" },
        { name: "USB‑IF", url: "https://www.usb.org/documents", desc: "USB‑IF 认证标准" },
        { name: "ANSI", url: "https://www.ansi.org/", desc: "美国国家标准化组织" },
        { name: "ESDA", url: "https://www.esda.org/store/standards/?category=1", desc: "静电放电协会" },
        { name: "uspto", url: "https://www.uspto.gov/", desc: "美国专利及商标局" },
        { name: "ASTM", url: "https://www.astm.org/", desc: "美国材料与试验协会" },
        { name: "DIN", url: "https://www.din.de/en", desc: "德国标准学会" },
        { name: "BSI", url: "https://www.bsigroup.com/", desc: "英国标准学会" },
        { name: "SA/NZSO", url: "https://www.standards.org.au/", desc: "澳大利亚/新西兰标准学会" },
        { name: "KATS", url: "https://www.kats.go.kr/main.do", desc: "韩国标准学会" },
        { name: "CEN", url: "https://www.cencenelec.eu/about-cen/", desc: "欧洲标淮学会" },
        { name: "ISTA", url: "https://www.ista.org/", desc: "国际安全运输协会" },
        { name: "NSTA", url: "https://www.nsta.org/", desc: "美国科学教学协会" },
        { name: "中关村材料试验技术联盟", url: "https://www.ccs.org.cn/ccswz/special?columnid=201900002000000016&id=0", desc: "标准" },
        { name: "碳中和", url: "https://www.ccn.ac.cn/", desc: "碳标准" },
        { name: "CAQ", url: "https://www.caq.org.cn/", desc: "中国质量协会" },
        { name: "GS1", url: "http://www.ancc.org.cn/search/tool", desc: "中国物品编码中心" },
        { name: "中国企业诚信网", url: "http://211.161.2.172:8088/cms/credit/index.jsp", desc: "其他" },
        { name: "CQAF", url: "：http://www.cqaf.org/?lang=cn", desc: "中国质量保证论坛" },
        { name: "食典通", url: "https://www.sdtdata.com/fx/fcv1/tsLibIndex", desc: "GB/NY/LS/SC/QB标准下载" },
        { name: "中国就业培训技术指导中心", url: "https://chinajob.mohrss.gov.cn/ywpd/pxjd/rmzt/zyjnbz/zcwj/", desc: "标准下载" },
        { name: "小绿典", url: "https://dljs123.com/#/search/criteria", desc: "标准下载" },
        { name: "标准网", url: "https://bbs.biaozhuns.com//home.php?mod=space&uid=2047951&do=profile&mycenter=1&mobile=2", desc: "标准下载（论坛）每72h限1次" },
        { name: "电子工程世界", url: "https://download.eeworld.com.cn/", desc: "电子工程论坛" },
        { name: "六西格玛品质网", url: "https://www.6sq.net/portal/", desc: "六西格玛专业论坛" },
        { name: "学兔兔", url: "http://www.bzfxw.com/", desc: "标准下载(每日限3次)" },
        { name: "艾索管理咨询", url: "http://www.iso-iso9000.com/", desc: "标准下载" },
        { name: "标准下载网1", url: "https://www.bzxz.net/gb/", desc: "标准下载" },
        { name: "食品伙伴网1", url: "http://down.foodmate.net/wap/", desc: "食品标准下载" },
        { name: "食品伙伴网2", url: "http://down.foodmate.net/", desc: "食品标准下载" },
        { name: "协筑资源", url: "https://www.webfree.net/home", desc: "建筑标准下载" },
        { name: "标准下载网2", url: "https://www.315368.com/", desc: "标准下载" },
        { name: "标准图集学习交流", url: "https://jzxx.vip/search/pan_view_search.html", desc: "标准下载" },
    ]
}, {
    id: 8, title: "医疗标准", icon: "fa-file-alt", websites: [
        { name: "IMDRF", url: "https://www.imdrf.org/working-groups/quality-management-systems", desc: "国际医疗器械监管者论坛" },
        { name: "MDSAP标准", url: "https://www.mdsap.global/documents", desc: "标准" },
        { name: "MDSAP（日本、巴西、澳大利亚）", url: "https://www.fda.gov/medical-devices/medical-device-single-audit-program-mdsap/mdsap-international-regulations-english-australia-brazil-canada-japan-and-usa", desc: "MDSAP五国的QMS相关法规" },
        { name: "东盟ASEAN官网", url: "https://asean.org/", desc: "关注医疗器械法规的变化" },
        { name: "国家卫生健康委员会", url: "https://www.nhc.gov.cn/wjw/wsbzxx/wsbz.shtml", desc: "GBZT/WST/GBZ" },
        { name: "国家药品监督管理局1", url: "https://www.nmpa.gov.cn/xxgk/fgwj/index.html", desc: "GB/GBT/YYT标准" },
        { name: "国家药品监督管理局2", url: "http://app.nifdc.org.cn/biaogzx/qxqwk.do", desc: "GB/GBT/YYT标准" },
        { name: "国家药品监督管理局3", url: "http://app.nifdc.org.cn/jianybz/jybzTwoGj.do?formAction=listQxtjbz", desc: "GBT标准下载" },
        { name: "国家药品监督管理局4", url: "http://app.nifdc.org.cn/jianybz/jybzTwoGj.do?formAction=listYlqx", desc: "GB标准下载" },
        { name: "国家药品监督管理局医疗器械技术", url: "https://www.cmde.org.cn/flfg/zdyz/flmlbzh/flmlylqx/index.html", desc: "YYT标准下载" },
        { name: "中食药监管信息查询平台", url: "http://www.cfdacx.com/?ref=https://szsyw.cn", desc: "查询" },
        { name: "中国食品药品检定研究院", url: "https://www.nifdc.org.cn/nifdc/", desc: "查询" },     
        { name: "卫生部-医疗器械官网", url: "https://www.mdd.gov.hk/tc/home/index.html", desc: "香港医疗器械" },
        { name: "ICH", url: "https://www.ich.org/", desc: "人用药品技术要求国际协调理事会" },
        { name: "PIC/S", url: "https://picscheme.org/", desc: "国际药品认证合作组织" },
        { name: "EMA", url: "https://www.ema.europa.eu/en/homepage", desc: "欧洲药品管理总局" },
        { name: "欧盟EUR-Lex（MDR_IVDR）", url: "https://eur-lex.europa.eu/homepage.html", desc: "EU 2017/745下载" },
        { name: "欧盟医疗器械信息", url: "https://ec.europa.eu/health/md_sector/overview_en", desc: "信息" },
        { name: "欧盟公共健康最新资讯", url: "https://health.ec.europa.eu/latest-updates_en", desc: "资讯" },
        { name: "欧盟器械最新资讯", url: "https://ec.europa.eu/health/medical-devices-sector/latest-updates_en", desc: "资讯" },
        { name: "欧盟通用规范", url: "https://ec.europa.eu/info/law/better-regulation/have-your-say/initiatives_en", desc: "通用规范/指南" },
        { name: "欧盟医疗器械协调小组", url: "https://ec.europa.eu/health/md_sector/new_regulations/guidance_en", desc: "MDCG模块医疗器械的相关指南" },
        { name: "EUDAMED", url: "https://health.ec.europa.eu/medical-devices-eudamed/overview_en", desc: "欧盟医疗器械数据库系统" },
        { name: "TeamNB", url: "https://www.team-nb.org/", desc: "公告机构组织发布的信息（OJ、MDCG）" },
        { name: "CAMD", url: "https://www.camd-europe.eu/news/", desc: "各主管当局的小组发布文章（如IVDR过渡期解答）" },
        { name: "NBOG", url: "https://www.nbog.eu/nbog-documents/", desc: "MDD下公告机构指导文件（NBOG）" },
        { name: "MEDDEV指南", url: "https://ec.europa.eu/health/md_sector/current_directives_en", desc: "MEDDEV更新的医疗器械指南文件" },
        { name: "FDA（注册）", url: "https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfRL/rl.cfm/", desc: "美国医疗器械注册查询" },
        { name: "最新的医疗器械指南文件", url: "https://www.fda.gov/medical-devices/guidance-documents-medical-devices-and-radiation-emitting-products/recent-final-medical-device-guidance-documents", desc: "美国FDA" },
        { name: "历史发布的医疗器械相关指南文件", url: "https://www.fda.gov/medical-devices/device-advice-comprehensive-regulatory-assistance/guidance-documents-medical-devices-and-radiation-emitting-products", desc: "美国FDA" },
        { name: "医疗器械数据库", url: "https://www.fda.gov/medical-devices/device-advice-comprehensive-regulatory-assistance/medical-device-databases", desc: "美国FDA" },
        { name: "510(k) Premarket Notification", url: "https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfPMN/pmn.cfm", desc: "美国FDA" },
        { name: "产品分类数据库", url: "https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfpcd/classification.cfm", desc: "美国FDA|查询器械类别，第几类医疗器械" },
        { name: "CDRH", url: "https://www.fda.gov/about-fda/fda-organization/center-devices-and-radiological-health", desc: "器械与放射健康中心|美国FDA" },
        { name: "FDA认可标准数据库", url: "https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfStandards/search.cfm", desc: "美国FDA" },
        { name: "QMSR", url: "https://www.fda.gov/medical-devices/postmarket-requirements-devices/quality-management-system-regulation-qmsr", desc: "美国FDA|质量管理体系法规" },
        { name: "自由信息法案", url: "https://www.fda.gov/regulatory-information/freedom-information", desc: "美国FDA" },
        { name: "UDI", url: "https://www.fda.gov/medical-devices/device-advice-comprehensive-regulatory-assistance/unique-device-identification-system-udi-system#ruleguidance", desc: "美国FDA" },
        { name: "FDA账号注册与登录", url: "https://www.access.fda.gov/oaa/logonFlow.htm?execution=e1s1", desc: "美国FDA" },
        { name: "FDA法规简介", url: "https://www.fda.gov/medical-devices/device-advice-comprehensive-regulatory-assistance", desc: "美国FDA" },
        { name: "MDR信息上报", url: "https://www.fda.gov/medical-devices/medical-device-safety/reporting-allegations-regulatory-misconduct", desc: "美国FDA" },
        { name: "召回数据库", url: "https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfRES/res.cfm", desc: "美国FDA" },
        { name: "GUDID数据库", url: "https://accessgudid.nlm.nih.gov/", desc: "美国FDA" },
        { name: "CBER", url: "https://www.fda.gov/about-fda/fda-organization/center-biologics-evaluation-and-research-cber", desc: "美国FDA|生物制品评估与研究中心" },
        { name: "联邦食品、药品及化妆品法案", url: "https://accessgudid.nlm.nih.gov/", desc: "美国FDA" },      
        { name: "联邦公报", url: "https://www.federalregister.gov/", desc: "美国联邦政府的官方日报" },
        { name: "CFR", url: "https://www.ecfr.gov/", desc: "美国联邦政府规章制度汇编" },
        { name: "医药与食品联邦法规", url: "https://www.ecfr.gov/current/title-21", desc: "美国CFR" },
        { name: "加拿大卫生局（注册）", url: "https://health-products.canada.ca/mdall-limh/prepareSearch?type=active", desc: "加拿大医疗器械注册查询" },
        { name: "加拿大法规SOR/98-282", url: "https://lois-laws.justice.gc.ca/eng/regulations/SOR-98-282/index.html", desc: "SOR/98-282法规下载" },
        { name: "加拿大医疗器械分类", url: "https://www.canada.ca/en/health-canada/services/drugs-health-products/medical-devices/application-information/guidance-documents/guidance-industry-keyword-assist-manufacturers-class-medical-devices.html", desc: "加拿大|查询器械类别，第几类医疗器械" },
        { name: "加拿大MDR", url: "https://laws-lois.justice.gc.ca/eng/regulations/", desc: "关注加拿大MDR医疗器械法规的变化" },
        { name: "加拿大医疗器械最新消息", url: "https://www.canada.ca/en/health-canada/services/drugs-health-products/medical-devices/what-new.html", desc: "关注加拿大医疗器械相关的最新动态" },
        { name: "日本PMDA（注册）", url: "https://www.pmda.go.jp/review-services/drug-reviews/foreign-mfr/0003.html", desc: "医疗器械注册查询" },
        { name: "日本法规翻译", url: "https://www.japaneselawtranslation.go.jp/en/laws", desc: "关注日本医疗器械法规的变化" },
        { name: "厚生劳动省官网", url: "https://www.mhlw.go.jp/english/index.html", desc: "药品和医疗器械" },
        { name: "英国医疗器械监管", url: "https://www.gov.uk/topic/medicines-medical-devices-blood/medical-devices-regulation-safety", desc: "关注英国医疗器械相关的最新动态" },
        { name: "英国医疗器械指南", url: "https://www.gov.uk/government/collections/new-guidance-and-information-for-industry-from-the-mhra", desc: "关注英国医疗器械相关的最新动态" },
        { name: "TGA法规", url: "https://www.legislation.gov.au/Search/Therapeutic%20Goods", desc: "澳大利亚TGA法规" },
        { name: "TGA", url: "https://www.tga.gov.au/resources", desc: "所有指南文件的检索" },
        { name: "TAG公告", url: "https://www.tga.gov.au/resources/publication/publications", desc: "公告" },
        { name: "TAG", url: "https://www.tga.gov.au/news/news", desc: "最新资讯发布" },
        { name: "TAG征求意见稿", url: "https://www.tga.gov.au/resources/consultation", desc: "征求意见稿" },
        { name: "ANVISA", url: "https://anvisalegis.datalegis.net/action/ActionDatalegis.php?acao=abrirLegislacao&cod_modulo=134&cod_menu=1696", desc: "国家卫生监测局-巴西" },
        { name: "第三方咨询机构Emergo", url: "https://www.emergobyul.com/resources/regulations-brazil", desc: "巴西Resolution-RDC-16-2013（BGMP）GMP要求" },
        { name: "Basic UDI-DI生成", url: "https://www.gs1.org/services/gmn-generator", desc: "" },
        { name: "德国MPG", url: "https://www.gesetze-im-internet.de/mpg/", desc: "德国医疗器械" },
        { name: "德国Bfarm", url: "https://www.bfarm.de/EN/News/News-from-the-divisions/Medical-devices-news/_node.html", desc: "德国主管当局信息更新" },
        { name: "MDA", url: "https://www.mda.gov.my/", desc: "马来西亚医疗器械法规及指南文件" },
        { name: "食品和药品安全部官网", url: "https://www.mfds.go.kr/eng/index.do", desc: "韩国食品和药品" },
        { name: "瑞士卫生部", url: "https://www.swissmedic.ch/swissmedic/en/home/news.html", desc: "关注瑞士医疗器械法规变化" },
        { name: "菲律宾FDA官网", url: "https://www.fda.gov.ph/", desc: "关注菲律宾医疗器械法规的变化" },
        { name: "HIBCC", url: "https://www.hibcc.org/", desc: "健康行业商业传播委员会" },
        { name: "HIBCC", url: "https://iccbba.org/", desc: "国际血库自动化通用理事会" },
        { name: "EDQM", url: "https://www.edqm.eu/en/home", desc: "欧洲药品与医疗质量局" },        
        { name: "NARA", url: "https://www.archives.gov/", desc: "美国国家档案和记录管理局" },    
        { name: "GMP1001", url: "https://www.gmp1001.com/h-col-109.html", desc: "药品/医疗器械/化妆品GMP标准" },
        { name: "蒲公英", url: "https://www.ouryao.com/forum.php", desc: "医疗标准下载（论坛）" },
    ]
}, {
    id: 9, title: "汽车标准", icon: "fa-file-alt", websites: [
        { name: "IATF", url: "https://www.iatfglobaloversight.org/", desc: "国际汽车工作组" },
        { name: "NTCAS", url: "：https://www.catarc.org.cn/", desc: "全国汽车标准化技术委员会" },
        { name: "AIAG", url: "https://www.aiag.org/", desc: "汽车行业行动小组" },
        { name: "IAOB", url: "https://www.iaob.org/", desc: "国际汽车监督署" },
        { name: "IATF FRANCE", url: "https://www.iatf-france.fr/", desc: "国际汽车工作组法国监督办公室" },
        { name: "UNECE", url: "https://unece.org/?__cf_chl_f_tk=ZNIknW1wf8MEfcsYmDxckNkNiO2dkvyDhwhqUIje1HY-1782955368-1.0.1.1-uEuVRlu9Jyr.5211TrFEtlEKmRmhpOetPRIYOGR9ivg", desc: "汽车法规体系" },
        { name: "VDA QMC", url: "https://vda-qmc.de/", desc: "德国汽车工业协会质量管理中心" },
        { name: "VDA", url: "https://www.vda.de/en", desc: "德国汽车工业协会" },
        { name: "CCFA", url: "https://ccfa.fr/", desc: "法国汽车制造商委员会" },
        { name: "FIEV", url: "https://www.fiev.fr/en/", desc: "法国汽车装备工业联盟" },
        { name: "FIEV", url: "https://www.fiev.fr/en/", desc: "法国车辆设备工业联合会" },
        { name: "ANFIA", url: "https://www.anfia.it/it/", desc: "意大利汽车工业协会" },
        { name: "QPDCA", url: "https://www.qpdca.com/portal.php", desc: "国内汽车行业论坛" },
    ]
}, {
    id: 30, title: "有害物质", icon: "fa-file-alt", websites: [
        { name: "ROHS2.0", url: "https://eur-lex.europa.eu/eli/dir/2011/65/oj/eng", desc: "电气电子设备有害物质限制指令2011/65/EU" },
        { name: "REACH SVHC物质", url: "https://echa.europa.eu/candidate-list-table", desc: "REACH清单" },
        { name: "REACH法规", url: "https://environment.ec.europa.eu/topics/chemicals/reach-regulation_en#law", desc: "REACH法规" },
        { name: "电池指令", url: "https://eur-lex.europa.eu/eli/dir/2006/66/oj", desc: "电池和蓄电池及废弃电池和蓄能器的指令2006/66/EC" },
        { name: "包装指令", url: "https://eur-lex.europa.eu/eli/dir/1994/62/oj", desc: "欧盟包装及包装废弃物的指令94/62/EC" },
        { name: "加州65清单物质", url: "https://oehha.ca.gov/proposition-65/proposition-65-list", desc: "第65号提案名单" },
        { name: "REACH授权物质", url: "https://eur-lex.europa.eu/eli/reg/2020/171/oj", desc: "REACH授权物质" },
        { name: "POPs", url: "https://eur-lex.europa.eu/eli/reg/2019/1021/oj", desc: "持久性有机污染物" },
        { name: "IEC62474(EPEAT)", url: "https://std.iec.ch/iec62474/iec62474.nsf/Index?open&q=044904", desc: "申报物质清单" },
        { name: "CHCC", url: "https://apps.leg.wa.gov/WAC/default.aspx?dispo=true&cite=173-334", desc: "华盛顿州化学品清单高度关注儿童" },
        { name: "TSCA清单", url: "https://www.epa.gov/tsca-inventory/how-access-tsca-inventory", desc: "有毒物质控制法" },
    ]
}, {
    id: 10, title: "资质查询", icon: "fa-id-card", websites: [
        { name: "全国认证认可信息公共服务平台", url: "http://cx.cnca.cn/CertECloud/index/index/page", desc: "认证资质查询" },
        { name: "全国认证认可信息公共服务平台", url: "http://cx.cnca.cn/CertECloud/index/index/page", desc: "认证资质查询" },
        { name: "CNAS", url: "https://www.cnas.org.cn/rkgf/rzjgrk/index.html", desc: "中国合格评定国家认可委员会-认证规则" },
        { name: "GLOBAC", url: "https://globalaccreditationcooperationincorporated.org/",  desc: "全球认可合作组织" },
        { name: "APAC", url: "https://www.apac-accreditation.org/", desc: "亚太认可合作组织" },
        { name: "国家企业信用信息公示系统", url: "http://www.gsxt.gov.cn/", desc: "企业工商/行政处罚/经营异常/违法查询" },
        { name: "个人信用信息服务平台", url: "https://ipcrs.pbccrc.org.cn/", desc: "个人信用报告查询" },
        { name: "信用中国", url: "https://www.creditchina.gov.cn/", desc: "查询企业、个人及社会组织的信用信息" }, 
        { name: "全国移动电话卡一证通查", url: "https://getsimnum.caict.ac.cn/#/", desc: "查询个人电话卡登记情况" },   
        { name: "中国执行信息公开网", url: "https://zxgk.court.gov.cn/", desc: "查老赖查限制消费" }, 
        { name: "人民法院公告网", url: "https://rmfygg.court.gov.cn/?url=biiii.com", desc: "全国法院公告信息查询" }, 
        { name: "中国裁判文书网", url: "https://wenshu.court.gov.cn/?url=biiii.com#", desc: "查询犯罪记录和官司" }, 
        { name: "国家社会保险公共服务平台", url: "https://si.12333.gov.cn/index.jhtml#/index", desc: "查社保" },   
        { name: "国家医保服务平台", url: "https://fuwu.nhsa.gov.cn/nationalHallSt/#/home?code=174000&message=serverUrl%20is%20null&gbFlag=true", desc: "国家医疗保障局" },       
        { name: "食品安全抽检公布结果查询系统", url: "https://spcjsac.gsxt.gov.cn/", desc: "查食品抽检" },
        { name: "国家税务总局全国增值税发票查验平台", url: "https://spcjsac.gsxt.gov.cn/", desc: "查发票" },
        { name: "中国专利公布公告", url: "http://epub.cnipa.gov.cn/", desc: "查专利" },
        { name: "中国及多国专利审查信息查询", url: "https://tysf.cponline.cnipa.gov.cn/am/#/user/login", desc: "查专利" }, 
        { name: "中国保护知识产权网", url: "https://ipr.mofcom.gov.cn/index.shtml", desc: "查知识产权" },    
        { name: "中国招标投标公共服务平台", url: "http://cebpubservice.cn/", desc: "查招标" },
        { name: "全国投资项目在线审批监管平台", url: "https://new.tzxm.gov.cn/", desc: "查投资项目" },
        { name: "国家政务服务平台", url: "https://gjzwfw.www.gov.cn/", desc: "查询" }, 
        { name: "中国记者网", url: "https://press.nppa.gov.cn/presscard/select/", desc: "记者证信息查询" }, 
        { name: "中国互联网联合辟谣平台", url: "https://www.piyao.org.cn/jrpy/index.htm", desc: "辟谣查询" }, 
        { name: "中央网信办", url: "https://www.12377.cn/jbcx.html?tab=6", desc: "举报查询" },     
        { name: "全国排污许可证管理信息平台", url: "https://permit.mee.gov.cn/permitExt/outside/PageQueryServlet?pageno=1&type=Law", desc: "排污许可证" },
        { name: "高新技术企业认定工作网", url: "http://www.innocom.gov.cn/?ref=https://szsyw.cn", desc: "资质查询" },
        { name: "深i企", url: "https://www.szsiq.com/#/specialized?temp=1770014537978", desc: "专精特新中小企业查询（仅限深圳企业）" },
        { name: "优质中小企业梯度培育平台", url: "https://zjtx.miit.gov.cn/zxqySy/main", desc: "科技型/创新型/专精特新/专精特新“小巨人”中小企业" },
        { name: "建筑工程施工许可证电子证照查询", url: "https://jzsc.mohurd.gov.cn/data/elePermit?ref=https%3A%2F%2Fszsyw.cn", desc: "资质查询" },
        { name: "全国建筑企业资质查询系统", url: "https://www.jzzzcx.cn/?ref=https://szsyw.cn#/", desc: "资质查询" },
        { name: "国家科技管理信息系统公共服务平台", url: "https://service.most.gov.cn/", desc: "资质查询" },
        { name: "科学基金网络信息系统登录平台", url: "https://grants.nsfc.gov.cn/pmpweb/login", desc: "资质查询" },
        { name: "商务部直销行业管理", url: "https://zxgl.mofcom.gov.cn/front/index", desc: "资质查询" },
        { name: "中国自由贸易区服务网", url: "https://fta.mofcom.gov.cn/", desc: "中华人民共和国商务部" },
        { name: "中国疾病预防控制中心", url: "https://www.chinacdc.cn/", desc: "查询" },
        { name: "中国计量科学研究院", url: "https://www.nim.ac.cn/", desc: "查询" },
        { name: "中国绿色食品发展中心", url: "http://www.greenfood.agri.cn/", desc: "查询" },
        { name: "农业农村部农产品质量安全中心", url: "http://www.aqsc.agri.cn/", desc: "查询" },
        { name: "食品生产许可获证查询", url: "https://spaqjg.e-cqs.cn/spscxk/", desc: "食品生产许可获证查询" },
        { name: "食品经营许可管理系统", url: "https://spjyxk.gsxt.gov.cn/cfdaPub/index/page/", desc: "食品经营许可管理系统" },
        { name: "法人库特殊食品监管子库信息查询系统", url: "https://tszkcx.gsxt.gov.cn/corplib_public/ent_search?ref=https://szsyw.cn", desc: "资质查询" },
        { name: "特殊食品信息查询平台", url: "http://ypzsx.gsxt.gov.cn/specialfood/?ref=https://szsyw.cn#/food", desc: "资质查询" },
        { name: "全国快递业务许可", url: "https://zwfw.spb.gov.cn/xkqy?ref=https://szsyw.cn", desc: "资质查询" },
        { name: "商业特许经营信息管理", url: "http://txjy.syggs.mofcom.gov.cn/?ref=https://szsyw.cn", desc: "资质查询" },
        { name: "质量证书查询", url: "https://www.cqc.com.cn/www/chinese/zscx/?ref=https://szsyw.cn", desc: "资质查询" },
        { name: "特种设备公示信息查询", url: "https://cnse.samr.gov.cn/info-pub/pub", desc: "特种设备公示信息查询" },
        { name: "技能证书", url: "https://zscx.osta.org.cn/?ref=https://szsyw.cn", desc: "资质查询" },
        { name: "中国商标网", url: "https://sso.cnipa.gov.cn/am/#/login", desc: "资质查询" },
        { name: "欧盟商标查询系统", url: "https://eutms.gpic.gd.cn/", desc: "资质查询" },
        { name: "安标国家矿用产品安全标志中心", url: "https://www.aqbz.org/?ref=https://szsyw.cn#/home", desc: "资质查询" },
        { name: "电信业务市场综合管理信息系统", url: "https://tsm.miit.gov.cn/dxxzsp/?ref=https://szsyw.cn", desc: "资质查询" },
        { name: "新闻总署从业机构和产品查询", url: "https://www.nppa.gov.cn/bsfw/cyjghcpcx/?ref=https://szsyw.cn", desc: "资质查询" },
        { name: "演出行业协会", url: "https://capa.com.cn/?ref=https://szsyw.cn#/index/HomePage", desc: "资质查询" },
        { name: "新闻记者证查询", url: "https://press.nppa.gov.cn/?ref=https://szsyw.cn", desc: "资质查询" },
        { name: "全国矿业权人勘查开采信息管理系统", url: "https://kyqgs.mnr.gov.cn/index.jhtml?ref=https://szsyw.cn", desc: "资质查询" },
        { name: "保险中介许可", url: "https://xkz.nfra.gov.cn/zj/?ref=https://szsyw.cn", desc: "资质查询" },
        { name: "保险许可证", url: "https://xkz.nfra.gov.cn/bx/?ref=https://szsyw.cn", desc: "资质查询" },
        { name: "金融许可证", url: "https://xkz.nfra.gov.cn/jr/?ref=https://szsyw.cn", desc: "资质查询" },
        { name: "SGS", url: "https://www.sgs.com/en", desc: "认证机构" },
        { name: "CQM", url: "https://www.cqm.com.cn/", desc: "方圆认证机构" },
        { name: "BCC", url: "http://www.bcc.com.cn/", desc: "新世纪认证机构" },
        { name: "nqa", url: "https://www.nqa.com/en-us", desc: "恩可埃认证机构" },
        { name: "TUVRheinland", url: "https://www.tuv.com/greater-china/cn/", desc: "莱茵认证机构" },
        { name: "intertek", url: "https://www.intertek.com.cn/", desc: "天祥认证机构" },
        { name: "CQC", url: "https://www.cqc.com.cn/www/index.html", desc: "中国质量认证中心" },
        { name: "ESTS", url: "https://www.estsglobal.com/zh-CN/services/all", desc: "全球性的审核认证机构" },
    ]
}, {
    id: 11, title: "国内法规", icon: "fa-gavel", websites: [
        { name: "全球法规网", url: "https://policy.mofcom.gov.cn/law/index.shtml", desc: "全球法规网" },
        { name: "最高人民法院公报", url: "http://gongbao.court.gov.cn/?ref=https://szsyw.cn", desc: "最高人民法院公报" },
        { name: "国家法律法规数据库", url: "https://flk.npc.gov.cn/index", desc: "国家法律法规数据库" },
        { name: "国家规章库", url: "https://www.gov.cn/zhengce/xxgk/gjgzk/index.htm?searchWord=", desc: "国家规章库" },
        { name: "中央网络安全和信息化委员会办公室", url: "https://www.cac.gov.cn/wxzw/zcfg/A093703index_1.htm", desc: "网络安全政策法规" },   
        { name: "中华人民共和国最高人民检察院", url: "https://www.spp.gov.cn/", desc: "" },
        { name: "智慧普法平台", url: "http://legalinfo.moj.gov.cn/", desc: "中国普法网" },
        { name: "中国法律服务网", url: "https://www.12348.gov.cn/#/homepage", desc: "中国法网" },
        { name: "HSE.zone", url: "https://www.hse.zone/index.html", desc: "法律法规更新平台" },
        { name: "合规网", url: "http://www.csrcare.com/", desc: "EHS合规管理" },
        { name: "职业卫生技术服务机构信息系统", url: "https://jsfw.zyjkfw.cn/", desc: "全国职业卫生放射卫生技术服务机构管理信息系统" },
        { name: "中国电子质量监督(e-CQS)公共服务门户", url: "https://psp.e-cqs.cn/egov/iwantMore.jsp?type=1", desc: "中国电子质量监督(e-CQS)公共服务门户" },
        { name: "证券期货法规数据库系统", url: "https://neris.csrc.gov.cn/falvfagui/?ref=https://szsyw.cn", desc: "证券期货法规数据库系统" },
    ]
}, {
    id: 31, title: "其他国家平台", icon: "fa-gavel", websites: [
        { name: "中国人大网", url: "http://www.npc.gov.cn/npc/index.html", desc: "" },
        { name: "中国政协网", url: "http://www.cppcc.gov.cn/", desc: "" },
        { name: "共产党员网", url: "https://www.12371.cn/?url=biiii.com", desc: "" },    
        { name: "中国共青团网", url: "https://www.gqt.org.cn/", desc: "" },
        { name: "中国征兵网", url: "https://www.gfbzb.gov.cn/?url=biiii.com", desc: "" },    
        { name: "全国组织机构统一社会信用代码数据服务中心", url: "https://www.cods.org.cn/cods/dmcx/index.html", desc: "" }, 
        { name: "中华全国总工会", url: "https://www.acftu.org/", desc: "" },
        { name: "中国机构编制网", url: "https://www.scopsr.gov.cn/", desc: "" },
        { name: "中共中央台湾工作办公室", url: "https://www.gwytb.gov.cn/", desc: "" },
        { name: "中央纪委国家监委", url: "https://www.ccdi.gov.cn/", desc: "" },
        { name: "国务院发展研究中心", url: "https://www.drc.gov.cn/default.aspx", desc: "" },
        { name: "国家体育总局体育器材装备中心", url: "https://www.sport.gov.cn/zbzx/", desc: "" },
        { name: "中国工程院", url: "https://www.cae.cn/", desc: "" },
        { name: "中国社会科学网", url: "https://www.cssn.cn/", desc: "" },
        { name: "中国科学院", url: "https://www.cas.cn/", desc: "" },
        { name: "中国海洋信息网", url: "https://www.nmdis.org.cn/", desc: "" },
        { name: "中华人民共和国海关总署", url: "http://www.customs.gov.cn/", desc: "" },
        { name: "国务院参事室", url: "http://www.counsellor.gov.cn/", desc: "" },
        { name: "国家新闻出版署", url: "https://www.nppa.gov.cn/", desc: "" },
        { name: "中华全国妇女联合会", url: "https://www.women.org.cn/", desc: "" },
        { name: "中华全国归国华侨联合会", url: "https://www.chinaql.org/", desc: "" },
        { name: "中国科学技术协会", url: "https://www.cast.org.cn/", desc: "" },
        { name: "中国文艺网", url: "https://www.cflac.org.cn/", desc: "" },
        { name: "中国作家网", url: "https://www.chinawriter.com.cn/", desc: "" },
        { name: "中华全国工商业联合会", url: "https://www.acfic.org.cn/", desc: "" },
    ]
}, {
    id: 12, title: "合同范本", icon: "fa-file-contract", websites: [
       { name: "合同示范文本库", url: "https://htsfwb.samr.gov.cn/", desc: "国家市场监督总局合同范本" },
        { name: "广西合同格式", url: "http://221.7.197.159:8088/www/template_list.aspx?ref=https://szsyw.cn", desc: "合同范本" },
        { name: "武汉合同格式", url: "https://scjgj.wuhan.gov.cn/bsfw/htgl_65/htfb/?ref=https://szsyw.cn", desc: "合同范本" },
        { name: "河南合同格式", url: "https://scjg.henan.gov.cn/ztzl/htsfwb/", desc: "合同范本" },
        { name: "杭州市合同格式", url: "https://scjg.hangzhou.gov.cn/col/col1694849/index.html?ref=https://szsyw.cn", desc: "合同范本" },
        { name: "广州市合同格式", url: "https://scjgj.gz.gov.cn/zwfw/fwxz/htsfwb/?ref=https://szsyw.cn", desc: "合同范本" },
        { name: "上海市合同格式", url: "https://scjgj.sh.gov.cn/057/?ref=https://szsyw.cn", desc: "合同范本" },
        { name: "黑龙江合同格式", url: "http://amr.hlj.gov.cn/", desc: "合同范本" },
        { name: "新疆维吾尔自治区合同格式", url: "https://scjgj.xinjiang.gov.cn/xjaic/htsfwb/202001/be58291df7344eb8be772d64d8ad71ea.shtml?ref=https://szsyw.cn", desc: "合同范本" },
        { name: "深圳市合同格式", url: "https://amr.sz.gov.cn/zxbs/zhxx/htsf/index.html", desc: "合同范本" },
        { name: "华律合同范本库", url: "https://www.66law.cn/contractmodel/?ref=https://szsyw.cn", desc: "合同范本" },
        { name: "法律图书馆", url: "http://www.law-lib.com/htfb/合同范本", desc: "合同范本" },
        { name: "法律家", url: "http://www.fae.cn/", desc: "合同范本" },
    ]
}, {
    id: 13, title: "采购平台", icon: "fa-shopping-cart", websites: [
        { name: "淘宝网", url: "https://www.taobao.com/", desc: "采购平台" },
        { name: "天猫", url: "https://www.tmall.com/", desc: "采购平台" },
        { name: "京东", url: "https://www.jd.com/", desc: "采购平台" },
        { name: "亚马逊", url: "https://www.amazon.com/", desc: "采购平台" },
        { name: "苏宁易购", url: "https://www.suning.com/", desc: "采购平台" },
        { name: "唯品会", url: "https://www.vip.com/", desc: "采购平台" },
        { name: "网易严选", url: "https://you.163.com/", desc: "采购平台" },
        { name: "当当网", url: "https://www.dangdang.com/", desc: "采购平台" },
        { name: "国美", url: "https://sitemap.gome.com.cn/", desc: "采购平台" },
        { name: "沃尔玛", url: "https://www.walmart.com/", desc: "采购平台" },
        { name: "易贝", url: "https://cn.ebay.com/", desc: "采购平台" },
        { name: "塔吉特", url: "https://www.target.com/", desc: "采购平台" },
        { name: "Temu", url: "https://www.temu.com/us-zh-Hans?_x_sessn_id=p8v8dwhd6w&refer_page_name=home&refer_page_id=10005_1768986853524_0fn92s00k7&refer_page_sn=10005", desc: "采购平台" },
        { name: "Costco", url: "https://www.costco.com/", desc: "采购平台" },
        { name: "SHEIN", url: "https://us.shein.com/", desc: "采购平台" },
        { name: "OTTO", url: "https://www.otto.de/", desc: "采购平台" },
        { name: "Cdiscount", url: "https://www.cdiscount.com/", desc: "采购平台" },
        { name: "乐天市场", url: "https://www.rakuten.co.jp/", desc: "采购平台" },
        { name: "雅虎购物", url: "https://shopping.yahoo.co.jp/", desc: "采购平台" },
        { name: "野莓", url: "https://www.wildberries.ru/", desc: "采购平台" },
        { name: "OZON", url: "https://www.ozon.ru/", desc: "采购平台" },
        { name: "Kogan.com", url: "https://www.kogan.com/au/", desc: "采购平台" },
    ]
}, {
    id: 14, title: "招聘平台", icon: "fa-user-plus", websites: [
       { name: "Boss直聘", url: "https://www.zhipin.com/shenzhen/?seoRefer=index", desc: "招聘平台" },
        { name: "智联招聘", url: "https://landing.zhaopin.com/register?identity=b&channel_name=baidu_sem_track&callback_id=glUmbr78&_data_version=0.6.1&channel_utm_content=jp&project=zlclient&channel_utm_medium=ocpc&tid=xTB&channel_link_type=web&channel_utm_source=baidusem_b&hash_key=MLJV6l8drfs4MKSgEAHR&sat_cf=2&channel_utm_term=19909&_channel_track_key=RLzoh25z&link_version=1&channel_keyword_id=700612665649&channel_ad_id=84616067013&channel_account_id=37244504&channel_keyword=%E6%99%BA%E8%81%94%E4%BA%BA%E6%89%8D%E7%BD%91%E6%8B%9B%E8%81%98%E7%BD%91%E5%AE%98%E7%BD%91&channel_adgroup_id=9149067349&channel_campaign_id=396370102&bd_vid=8629845013051779149", desc: "招聘平台" },
        { name: "前程无忧", url: "https://mkt.51job.com/tg/sem/lp2025/LP_2025_CB4.html?from=bingpz&partner=SEM_pcbingpz_02", desc: "招聘平台" },
        { name: "中国公共招聘网", url: "http://job.mohrss.gov.cn/", desc: "招聘平台" },
        { name: "国资央企招聘平台", url: "https://cujiuye.iguopin.com/", desc: "招聘平台" },
        { name: "湖南人才网", url: "https://www.hnrcsc.com/#/", desc: "招聘平台" },
        { name: "南方人才网", url: "https://www.job168.com/", desc: "招聘平台" },
        { name: "四川人才网", url: "https://www.scrc168.com/", desc: "招聘平台" },
        { name: "广东人才网", url: "https://www.gdrc.com/", desc: "招聘平台" },
    ]
}, {
    id: 15, title: "程序开发", icon: "fa-code", websites: [
        { name: "WBS工作分解结构生成器", url: "https://wzb13014.github.io/wzb/tool59", desc: "项目分解" },
        { name: "AQL抽样", url: "https://wzb13014.github.io/wzb/tool3", desc: "查询" },
        { name: "国家标准状态查询", url: "https://wzb13014.github.io/wzb/tool15", desc: "查询" },
        { name: "文件批量重命名", url: "https://wzb13014.github.io/wzb/tool27", desc: "工具" },
        { name: "文件命名转清单", url: "https://wzb13014.github.io/wzb/tool48", desc: "文件转清单" },
        { name: "聚餐菜谱清单", url: "https://wzb13014.github.io/wzb/tool69", desc: "工具" },      
        { name: "文件夹结构树形生成器", url: "https://wzb13014.github.io/wzb/tool118", desc: "文件夹转目录" },
        { name: "Excel压缩", url: "https://wzb13014.github.io/wzb/tool93", desc: "压缩" },  
        { name: "PDF压缩大师", url: "https://wzb13014.github.io/wzb/tool94", desc: "压缩" }, 
        { name: "PDF在线压缩", url: "https://wzb13014.github.io/wzb/tool95", desc: "压缩" },  
        { name: "图片压缩", url: "https://wzb13014.github.io/wzb/tool23", desc: "压缩" },
        { name: "文件整理", url: "https://wzb13014.github.io/wzb/tool79", desc: "工具" },
        { name: "码上扫描", url: "https://wzb13014.github.io/wzb/tool33", desc: "扫码工具" },
        { name: "Todo Master", url: "https://wzb13014.github.io/wzb/tool65", desc: "待办事项" },  
        { name: "名片设计器", url: "https://wzb13014.github.io/wzb/tool34", desc: "标签标识" }, 
        { name: "侧边标签制作工坊", url: "https://wzb13014.github.io/wzb/tool55", desc: "文件夹侧边标签" }, 
        { name: "标识打印生成工具", url: "https://wzb13014.github.io/wzb/tool30", desc: "标签标识" },
        { name: "限高标识生成器", url: "https://wzb13014.github.io/wzb/tool31", desc: "标签标识" },
        { name: "车间限高标识生成器", url: "https://wzb13014.github.io/wzb/tool32", desc: "标签标识" },
        { name: "上岗证生成器", url: "https://wzb13014.github.io/wzb/tool39", desc: "标签标识" },
        { name: "证书制作", url: "https://wzb13014.github.io/wzb/tool42", desc: "标签标识" },   
        { name: "工牌制作工具", url: "https://wzb13014.github.io/wzb/tool66", desc: "标签标识" },       
        { name: "安全检查整改", url: "https://wzb13014.github.io/wzb/tool64", desc: "工具" },      
        { name: "文本去重", url: "https://wzb13014.github.io/wzb/tool37", desc: "文本" },
        { name: "文本加密解密", url: "https://wzb13014.github.io/wzb/tool100", desc: "文本" },
        { name: "PDF解密", url: "https://wzb13014.github.io/wzb/tool113", desc: "仅编辑权限解除" },
        { name: "excel解密", url: "https://wzb13014.github.io/wzb/tool114", desc: "仅编辑权限解除" },
        { name: "word解密", url: "https://wzb13014.github.io/wzb/tool115", desc: "仅编辑权限解除" },   
        { name: "提词器Pro", url: "https://wzb13014.github.io/wzb/tool38", desc: "工具" },  
        { name: "WordCloud Pro", url: "https://wzb13014.github.io/wzb/tool82", desc: "专业词云生成器" },
        { name: "单词卡片制作", url: "https://wzb13014.github.io/wzb/tool41", desc: "工具" }, 
        { name: "pdf转图片", url: "https://wzb13014.github.io/wzb/tool29", desc: "工具" },
        { name: "图片转pdf", url: "https://wzb13014.github.io/wzb/tool22", desc: "工具" },
        { name: "图片拼接", url: "https://wzb13014.github.io/wzb/tool25", desc: "工具" },
        { name: "图片拆分九宫格", url: "https://wzb13014.github.io/wzb/tool40", desc: "工具" },
        { name: "图片裁剪工具", url: "https://wzb13014.github.io/wzb/tool45", desc: "工具" },
        { name: "图片添加水印", url: "https://wzb13014.github.io/wzb/tool24", desc: "文字图片水印" },
        { name: "图片加壳", url: "https://wzb13014.github.io/wzb/tool116", desc: "文字图片水印" },      
        { name: "图片滤镜调节器", url: "https://wzb13014.github.io/wzb/tool36", desc: "工具" },
        { name: "GIF动图制作器", url: "https://wzb13014.github.io/wzb/tool92", desc: "工具" },       
        { name: "Pixel Mask Pro", url: "https://wzb13014.github.io/wzb/tool68", desc: "图片马赛克" },       
        { name: "ZIP压缩打包解压", url: "https://wzb13014.github.io/wzb/tool96", desc: "压缩解压" },          
        { name: "电子签名", url: "https://wzb13014.github.io/wzb/tool20", desc: "工具" },
        { name: "电子公章", url: "https://wzb13014.github.io/wzb/tool21", desc: "工具" },
        { name: "电子章", url: "https://wzb13014.github.io/wzb/tool26", desc: "多类型印章" },
        { name: "智能随机分组", url: "https://wzb13014.github.io/wzb/tool46", desc: "工具" },
        { name: "PDF预览器", url: "https://wzb13014.github.io/wzb/tool47", desc: "工具" },
        { name: "PDF合并拆分", url: "https://wzb13014.github.io/wzb/tool49", desc: "工具" },
        { name: "excel合并", url: "https://wzb13014.github.io/wzb/tool145", desc: "合并工作表" },      
        { name: "PDF加水印", url: "https://wzb13014.github.io/wzb/tool133", desc: "工具" },    
        { name: "PDF去除水印", url: "https://wzb13014.github.io/wzb/tool134", desc: "工具" },   
        { name: "文字转语音", url: "https://wzb13014.github.io/wzb/tool56", desc: "工具" },
        { name: "LED广告牌模拟器", url: "https://wzb13014.github.io/wzb/tool57", desc: "工具" },
        { name: "流程图绘制", url: "https://wzb13014.github.io/wzb/tool58", desc: "工具" },
        { name: "计时器", url: "https://wzb13014.github.io/wzb/tool28", desc: "工具" },
        { name: "时间计划小程序", url: "https://wzb13014.github.io/wzb/tool8", desc: "日期计划程序" },
        { name: "时光计算器", url: "https://wzb13014.github.io/wzb/tool4", desc: "日期计算" },
        { name: "年龄计算器", url: "https://wzb13014.github.io/wzb/tool91", desc: "工具" },  
        { name: "专业颜色设计工具", url: "https://wzb13014.github.io/wzb/tool13", desc: "颜色设计" },
        { name: "单位换算器", url: "https://wzb13014.github.io/wzb/tool14", desc: "单位换算器" },
        { name: "html工具", url: "https://wzb13014.github.io/wzb/tool99", desc: "html工具" },
        { name: "html导出", url: "https://wzb13014.github.io/wzb/tool5", desc: "html工具" },
        { name: "txt导出", url: "https://wzb13014.github.io/wzb/tool17", desc: "txt工具" },
        { name: "数据脱敏工具", url: "https://wzb13014.github.io/wzb/tool54", desc: "工具" }, 
        { name: "高级密码生成器", url: "https://wzb13014.github.io/wzb/tool44", desc: "工具" },
        { name: "随机数生成器", url: "https://wzb13014.github.io/wzb/tool43", desc: "工具" }, 
        { name: "随机头像生成器", url: "https://wzb13014.github.io/wzb/tool53", desc: "工具" },
        { name: "专业术语查询", url: "https://wzb13014.github.io/wzb/tool9", desc: "查询" },
        { name: "标准代号查询", url: "https://wzb13014.github.io/wzb/tool11", desc: "查询" },
        { name: "二维码批量生成", url: "https://wzb13014.github.io/wzb/tool12", desc: "条码工具" },
        { name: "国家/地区/品牌查询", url: "https://wzb13014.github.io/wzb/tool2", desc: "查询" },
        { name: "部门编号查询", url: "https://wzb13014.github.io/wzb/tool7", desc: "查询" },
        { name: "Doodle Recorder", url: "https://wzb13014.github.io/wzb/tool52", desc: "涂鸦演示录制" }, 
        { name: "赛博朋克故障艺术生成器", url: "https://wzb13014.github.io/wzb/tool51", desc: "图片文字" }, 
        { name: "效率工具箱", url: "https://wzb13014.github.io/wzb/tool60", desc: "管理理论工具" },     
        { name: "玄机阁", url: "https://wzb13014.github.io/wzb/tool35", desc: "占卜" },
        { name: "星运阁", url: "https://wzb13014.github.io/wzb/tool67", desc: "占卜" },   
        { name: "智能排班", url: "https://wzb13014.github.io/wzb/tool63", desc: "工具" },    
        { name: "工资条生成器", url: "https://wzb13014.github.io/wzb/tool62", desc: "工具" },
        { name: "组织架构图生成器", url: "https://wzb13014.github.io/wzb/tool61", desc: "工具" }, 
        { name: "全能视频播放器", url: "https://wzb13014.github.io/wzb/tool72", desc: "工具" },
        { name: "音频播放器", url: "https://wzb13014.github.io/wzb/tool73", desc: "工具" },
        { name: "全能音频格式转换器", url: "https://wzb13014.github.io/wzb/tool76", desc: "工具" },
        { name: "QC七大工具", url: "https://wzb13014.github.io/wzb/tool70", desc: "工具" },
        { name: "全能翻译", url: "https://wzb13014.github.io/wzb/tool77", desc: "工具" },
        { name: "天气查看", url: "https://wzb13014.github.io/wzb/tool78", desc: "工具" },
        { name: "Folder Icon Studio", url: "https://wzb13014.github.io/wzb/tool80", desc: "ICO图标制作" },
        { name: "员工技能矩阵图", url: "https://wzb13014.github.io/wzb/tool81", desc: "工具" },
        { name: "英语课文背诵工具", url: "https://wzb13014.github.io/wzb/tool74", desc: "工具" },
        { name: "背诵助手", url: "https://wzb13014.github.io/wzb/tool75", desc: "工具" },
        { name: "电脑配置检测", url: "https://wzb13014.github.io/wzb/tool83", desc: "工具" },
        { name: "幸运抽奖Pro", url: "https://wzb13014.github.io/wzb/tool84", desc: "工具" },
        { name: "9001-2015知识库", url: "https://wzb13014.github.io/wzb/tool86", desc: "知识库-仅学习用途" },
        { name: "14001-2026知识库", url: "https://wzb13014.github.io/wzb/tool89", desc: "知识库-仅学习用途" },
        { name: "45001-2018知识库", url: "https://wzb13014.github.io/wzb/tool146", desc: "知识库-仅学习用途" },   
        { name: "13485-2016知识库", url: "https://wzb13014.github.io/wzb/tool87", desc: "知识库-仅学习用途" },
        { name: "16949-2016知识库", url: "https://wzb13014.github.io/wzb/tool88", desc: "知识库-仅学习用途" },
        { name: "BRC知识库", url: "https://wzb13014.github.io/wzb/tool90", desc: "知识库-仅学习用途" },      
        { name: "21CFR知识库", url: "https://wzb13014.github.io/wzb/tool85", desc: "知识库-仅学习用途" }, 
        { name: "图书账号", url: "https://wzb13014.github.io/wzb/tool16", desc: "图书账号" },
        { name: "8D报告", url: "https://wzb13014.github.io/wzb/tool97", desc: "工具" },
        { name: "全屏时尚时钟", url: "https://wzb13014.github.io/wzb/tool98", desc: "工具" },
        { name: "桌面快捷方式生成器", url: "https://wzb13014.github.io/wzb/tool101", desc: "工具" },
        { name: "人民币大写转换器", url: "https://wzb13014.github.io/wzb/tool102", desc: "工具" },
        { name: "随机点名器", url: "https://wzb13014.github.io/wzb/tool103", desc: "工具" },
        { name: "全能二维码生成器", url: "https://wzb13014.github.io/wzb/tool104", desc: "工具" },
        { name: "全能取名", url: "https://wzb13014.github.io/wzb/tool105", desc: "工具" },
        { name: "键盘鼠标测试", url: "https://wzb13014.github.io/wzb/tool106", desc: "工具" },
        { name: "表情符号大全", url: "https://wzb13014.github.io/wzb/tool107", desc: "工具" },  
        { name: "英文音标输入器", url: "https://wzb13014.github.io/wzb/tool108", desc: "工具" }, 
        { name: "文字转拼音", url: "https://wzb13014.github.io/wzb/tool132", desc: "工具" }, 
        { name: "文本对比", url: "https://wzb13014.github.io/wzb/tool144", desc: "工具" },       
        { name: "智能排座位系统", url: "https://wzb13014.github.io/wzb/tool109", desc: "工具" }, 
        { name: "喜事份子登记", url: "https://wzb13014.github.io/wzb/tool110", desc: "工具" },    
        { name: "舞台背景播放", url: "https://wzb13014.github.io/wzb/tool117", desc: "工具" },      
        { name: "会议计时器", url: "https://wzb13014.github.io/wzb/tool111", desc: "工具" },
        { name: "海报生成器", url: "https://wzb13014.github.io/wzb/tool112", desc: "工具" },   
        { name: "元素周期表", url: "https://wzb13014.github.io/wzb/tool119", desc: "工具" },  
        { name: "汇率查询", url: "https://wzb13014.github.io/wzb/tool120", desc: "工具" },  
        { name: "全球首都", url: "https://wzb13014.github.io/wzb/tool121", desc: "工具" },  
        { name: "乘法口诀表", url: "https://wzb13014.github.io/wzb/tool122", desc: "工具" },  
        { name: "批量邀请函生成器", url: "https://wzb13014.github.io/wzb/tool123", desc: "工具" },  
        { name: "批量邀请函", url: "https://wzb13014.github.io/wzb/tool125", desc: "工具" },  
        { name: "贺卡生成器", url: "https://wzb13014.github.io/wzb/tool126", desc: "工具" },  
        { name: "时间戳转换", url: "https://wzb13014.github.io/wzb/tool129", desc: "工具" },
        { name: "Markdown编辑器", url: "https://wzb13014.github.io/wzb/tool130", desc: "工具" },   
        { name: "JSON工具箱", url: "https://wzb13014.github.io/wzb/tool131", desc: "工具" },  
        { name: "三十六计", url: "https://wzb13014.github.io/wzb/tool124", desc: "学习" },  
        { name: "动物认知乐园", url: "https://wzb13014.github.io/wzb/tool128", desc: "学习" },  
        { name: "屏幕量角器标尺", url: "https://wzb13014.github.io/wzb/tool135", desc: "学习" },   
        { name: "视力综合测试", url: "https://wzb13014.github.io/wzb/tool127", desc: "工具" }, 
        { name: "音频剪辑工作室", url: "https://wzb13014.github.io/wzb/tool136", desc: "工具" },
        { name: "四象限待办清单", url: "https://wzb13014.github.io/wzb/tool137", desc: "工具" },
        { name: "3D文字效果生成", url: "https://wzb13014.github.io/wzb/tool147", desc: "工具" },
        { name: "PDF页数提取器", url: "https://wzb13014.github.io/wzb/tool148", desc: "工具" },
        { name: "SOP模板生成器", url: "https://wzb13014.github.io/wzb/tool149", desc: "工具" },   
        { name: "样品存放查询", url: "https://wzb13014.github.io/wzb/tool150", desc: "查询" },
        { name: "图片搜索聚合", url: "https://wzb13014.github.io/wzb/tool151", desc: "工具" },
        { name: "PyEditor", url: "https://wzb13014.github.io/wzb/tool152", desc: "工具" },
        { name: "胜任力模型搭建器", url: "https://wzb13014.github.io/wzb/tool153", desc: "工具" },
        { name: "职场黑话翻译器", url: "https://wzb13014.github.io/wzb/tool154", desc: "工具" },
        { name: "机械键盘打字音效", url: "https://wzb13014.github.io/wzb/tool155", desc: "工具" },
        { name: "工作汇报废话文学", url: "https://wzb13014.github.io/wzb/tool156", desc: "工具" },
        { name: "静息正念呼吸", url: "https://wzb13014.github.io/wzb/tool157", desc: "工具" },
        { name: "排行榜生成器", url: "https://wzb13014.github.io/wzb/tool158", desc: "工具" },
        { name: "职场压力自评", url: "https://wzb13014.github.io/wzb/tool159", desc: "工具" },
        { name: "繁简转换工具箱", url: "https://wzb13014.github.io/wzb/tool160", desc: "工具" },  
        { name: "Word文件页数统计", url: "https://wzb13014.github.io/wzb/tool161", desc: "工具" },
        { name: "Excel工作表数量统计", url: "https://wzb13014.github.io/wzb/tool162", desc: "工具" },
        { name: "文件夹文件数量统计", url: "https://wzb13014.github.io/wzb/tool166", desc: "工具" },
        { name: "压缩包文件数量查询", url: "https://wzb13014.github.io/wzb/tool167", desc: "工具" },
        { name: "Excel添加水印", url: "https://wzb13014.github.io/wzb/tool163", desc: "工具" },      
        { name: "XLS转换XLSX", url: "https://wzb13014.github.io/wzb/tool164", desc: "工具" },
        { name: "图片EXIF查看器", url: "https://wzb13014.github.io/wzb/tool165", desc: "工具" },
        { name: "更新日志", url: "https://wzb13014.github.io/wzb/tool168", desc: "工具" },
        { name: "登山海拔与含氧量", url: "https://wzb13014.github.io/wzb/tool138", desc: "查询" },
        { name: "自驾油耗与过路费合计计算器", url: "https://wzb13014.github.io/wzb/tool139", desc: "查询" },
        { name: "行李重量尺寸合规检查器", url: "https://wzb13014.github.io/wzb/tool140", desc: "查询" },
        { name: "全景地球仪", url: "https://wzb13014.github.io/wzb/tool141", desc: "查询" },
        { name: "地图旅行规划器", url: "https://wzb13014.github.io/wzb/tool142", desc: "查询" },
        { name: "路线规划", url: "https://wzb13014.github.io/wzb/tool143", desc: "查询" },
        { name: "产品直通率模拟展示", url: "https://wzb13014.github.io/wzb/tool71", desc: "演示工具" },
        { name: "不良影响演示", url: "https://wzb13014.github.io/wzb/tool10", desc: "演示工具" },
        { name: "全局按键可视化", url: "https://wzb13014.github.io/wzb/tool50", desc: "演示工具" },
        { name: "生日祝福", url: "https://wzb13014.github.io/wzb/tool18", desc: "演示工具" },
    ]
}, {
    id: 16, title: "办公工具", icon: "fa-desktop", websites: [
        { name: "drow.io", url: "https://app.diagrams.net/", desc: "流程图" },
        { name: "Excalidraw", url: "https://excalidraw.com/", desc: "流程图" },
        { name: "process on", url: "https://www.processon.com/login", desc: "流程图" },
        { name: "在线思维导图", url: "https://1000tool.com/office/mind-map", desc: "思维导图" },
        { name: "kalvin在线工具", url: "https://tools.kalvinbg.cn/txt/sign", desc: "电子签名" },
        { name: "eSign. AI", url: "https://www.esign.ai/zh-CN/tool/signature", desc: "电子签名" },
        { name: "AI签名生成器", url: "https://signaturegen.ai/zh", desc: "电子签名" },
        { name: "Signature Sketch", url: "https://signaturesketch.tech/zh/", desc: "电子签名-手绘制" },
        { name: "易白工具", url: "https://ebtool.com/zh-CN/signature/", desc: "电子签名-手绘制" },
        { name: "CZL 工具箱", url: "https://onepage.czl.net/tools/seal_generation", desc: "电子章-高度自定义" },
        { name: "在线印章生成器", url: "https://seal.scung.cn/", desc: "电子章-自定义" },
        { name: "DrawStamp", url: "https://drawstamp.com/maker", desc: "电子章-自定义" },
        { name: "印章生成器", url: "https://seal.108ai.com/#generator", desc: "电子章-自定义" },
        { name: "改图宝", url: "https://www.gaitubao.com/yinzhang/", desc: "个人印章" },
        { name: "mermaid", url: "https://mermaid.live/", desc: "AI代码生成思维图二次创作" },
        { name: "paddleOCR", url: "https://aistudio.baidu.com/paddleocr", desc: "OCR" },
        { name: "Deepseek OCR", url: "https://deepseek-ocr.aws.xin/", desc: "OCR" },
        { name: "WordClouds", url: "https://www.wordclouds.com", desc: "词云" },
        { name: "优词云", url: "https://www.uciyun.com/", desc: "词云" },
        { name: "词云", url: "https://wordcloud.online/zh", desc: "词云" },
        { name: "二维工坊", url: "https://tools.2weima.com/ciyun", desc: "词云" },
        { name: "造字侠词云", url: "http://wordcloud.reeji.com/", desc: "词云" },
        { name: "WORD ART", url: "https://wordart.com/", desc: "词云" },
        { name: "Diffchecker", url: "https://www.diffchecker.com/zh-Hans/", desc: "文本/图像/文档/excel/文件夹对比" },    
        { name: "chatexcel", url: "https://chatexcel.com/#/", desc: "AI excel" },
        { name: "Smallpdf", url: "https://smallpdf.com/cn/unlock-pdf", desc: "PDF工具" },
        { name: "ALL TO ALL", url: "https://www.alltoall.net/", desc: "PDF工具" },
        { name: "Dpdf", url: "https://www.dpdf.com/", desc: "PDF工具" },
        { name: "Ilovepdf", url: "https://www.ilovepdf.com/", desc: "PDF工具" },
        { name: "Ilovepdf", url: "https://www.ilovepdf.com/download/50ldpvg84A2jrrcc8fxhpsjk3ym1Avktzl2zxAklxAv5j5s3nf90df4vjqypwz4ym2tt6hsb88qfz4gdlxr3gz0kxAqdsg7s21lslcf7vl1nA3t91kb8941yv8xjwhs6vvc4f79kjc3cActbpnpnxjw6b6g4rq69q8nm4h9n7f0yvhktmlnq/28", desc: "PDF解密" },     
        { name: "PDF24 Tools", url: "https://tools.pdf24.org/zh/", desc: "PDF工具" },
        { name: "Stirling PDF", url: "https://stirlingpdf.io/?lang=zh_CN", desc: "PDF工具" },
        { name: "超级PDF", url: "https://xpdf.cn/", desc: "PDF工具" },
        { name: "FreeConvert", url: "https://www.freeconvert.com/zh", desc: "EPUB转PDF" },
        { name: "在线HEIC转PDF", url: "https://heictopdf.run/zh", desc: "HEIC转PDF" },
        { name: "ScanNerd", url: "https://scannerd.co/zh", desc: "扫描成PDF" },
        { name: "CDKM", url: "https://cdkm.com/", desc: "文件格式转换" },
        { name: "Convertio", url: "https://convertio.co/zh/", desc: "格式转换工具" },
        { name: "Aconvert", url: "https://www.aconvert.com/cn/", desc: "格式转换工具" },
        { name: "To ePub", url: "https://toepub.com/zh/", desc: "电子书格式转换" },
        { name: "markdowntoword", url: "https://markdowntoword.io/zh/tools/markdown-to-pdf", desc: "Markdown转pdf" },
        { name: "markdowntopdf", url: "https://markdowntopdf.co/zh", desc: "Markdown转pdf" },
        { name: "Boost tool", url: "https://boost-tool.com/zh/tools/md_pdf", desc: "Markdown转pdf" },
        { name: "Markdown编辑器", url: "https://mdeditor.net/zh/", desc: "Markdown转pdf" },
        { name: "易转换", url: "https://www.easeconvert.com/markdown/", desc: "Markdown转pdf" },
        { name: "Markdown Online", url: "https://www.markdownonline.net/zh/", desc: "Markdown编辑器" },
        { name: "文字转手写", url: "https://text-to-handwriting.org/zh", desc: "文字转手写" },
        { name: "白描网页版", url: "https://web.baimiaoapp.com/", desc: "文字提取工具" },
        { name: "ChartCube", url: "https://chartcube.alipay.com/", desc: "可视化图表制作" },
        { name: "富婆图表", url: "https://www.richcharts.com/", desc: "可视化图表制作" },
        { name: "Recorder Online", url: "https://recorder-online.com/zh", desc: "在线录屏" },
        { name: "在线解压缩包", url: "https://unziponline.org/", desc: "在线解压缩包" },
        { name: "网页转换助手", url: "http://mmhtml.com/zh/", desc: "网页转换助手" },
        { name: "pad ws交互白板", url: "https://pad.ws/", desc: "演示白板" },
        { name: "在线白板", url: "https://toolwa.com/whiteboard/", desc: "演示白板" },
        { name: "FileCodeBox", url: "https://share.lanol.cn/#/", desc: "文件快递柜" },
        { name: "文叔叔", url: "https://www.wenshushu.cn/", desc: "文件快递柜" },
        { name: "MuseTransfer", url: "https://musetransfer.com/", desc: "文件快递柜" },
        { name: "Wormhole:https", url: "https://wormhole.app/", desc: "文件快递柜" },
        { name: "轻松传", url: "https://easychuan.cn/", desc: "文件快递柜" },
        { name: "gantt-chart", url: "https://gantt.vicsdf.com/", desc: "甘特图生成" },
        { name: "发票查验", url: "https://inv-veri.chinatax.gov.cn/", desc: "发票查验" },
        { name: "发票提取助手", url: "https://airegex.cn/", desc: "发票提取" },
        { name: "天眼查", url: "https://www.tianyancha.com/", desc: "企业查询" },
        { name: "企查查", url: "https://www.qcc.com/", desc: "企业查询" },
        { name: "爱企查", url: "https://aiqicha.baidu.com/", desc: "企业查询" },
        { name: "启信宝", url: "https://www.qixin.com/", desc: "企业查询" },
    ]
}, {
    id: 17, title: "效率工具", icon: "fa-bolt", websites: [
        { name: "HTML工具", url: "https://www.jyshare.com/front-end/61/", desc: "HTML工具" },
        { name: "兔兔图床", url: "https://tutu.to/#google_vignette", desc: "免费图片托管平台" },
        { name: "路过图床", url: "https://imgse.com/", desc: "免费图片托管平台（每日限8）" },
        { name: "黑猫图床", url: "https://img.hmvod.cc/", desc: "图床" },
        { name: "VDA6.3", url: "https://vda.bosspim.com/", desc: "审核网页" },
        { name: "Inno Setup", url: "https://jrsoftware.org/isdl.php", desc: "网页转app" },
        { name: "PakePlus", url: "https://pakeplus.com/zh/", desc: "网页转app" },
        { name: "bkhtmltopdf", url: "https://demo.bkhtmltopdf.com/ui/#/html-to-pdf", desc: "html转pdf" },
        { name: "草料二维码", url: "https://cli.im/", desc: "文件转二维码" },
        { name: "篡改猴脚本", url: "https://greasyfork.qytechs.cn/zh-CN/scripts/by-site/bilibili.com", desc: "文件转二维码" },
        { name: "在线奖状生成器", url: "https://www.lddgo.net/image/certificate-generate", desc: "" },
        { name: "蜻蜓在线工具", url: "https://33tool.com/head/", desc: "头像添加红旗" },      
        { name: "Clarity", url: "https://clarity.microsoft.com/demo/projects/view/3t0wlogvdz/dashboard?date=Last%203%20days", desc: "网站使用统计工具" },
        { name: "Tiny Wow", url: "https://tinywow.com/", desc: "工具汇集" },
        { name: "SVG Repo", url: "https://www.svgrepo.com/", desc: "图标工具" },
        { name: "在线图片背景去除", url: "https://removebg.ratbox.top/?url=biiii.com", desc: "工具" }, 
        { name: "九图拆分", url: "https://tools.mind-elixir.com/zh/image-splitter", desc: "工具" },     
        { name: "字帖生成", url: "https://uu-tool.com/tools/show/name/hanzi_practice.html", desc: "工具" },          
        { name: "filecompress", url: "https://filecompress.org/zh-cn/documents-tools/compress-xlsx", desc: "excel文件体积压缩" },
        { name: "imgdiet", url: "https://www.imgdiet.com/zh-CN", desc: "图片压缩工具" },
        { name: "极速图片压缩器", url: "https://www.zgcoder.com/tic/", desc: "图片压缩工具" },
        { name: "Free Tinypng", url: "https://free.tinypng.site/", desc: "图片压缩工具" },
        { name: "照片转手绘", url: "https://www.picturetodrawing.org/zh", desc: "照片转手绘" },
        { name: "Copicseal", url: "https://copicseal.kohai.top/", desc: "照片加水印" },
        { name: "EXIF Frame", url: "https://exifframe.org/zh", desc: "照片加水印" },
        { name: "pick free", url: "https://www.pickfree.cn/", desc: "图片/视频/音效/音乐下载" },
        { name: "123APPs", url: "https://online-video-cutter.com/projects", desc: "视频去水印" },
        { name: "DiffRhythm", url: "https://diffrhythm.com/zh", desc: "AI音乐生成" },
        { name: "牛五音乐网", url: "http://www.6002255.com/", desc: "音乐下载" },
        { name: "lucida", url: "https://lucida.to/", desc: "音乐下载" },
        { name: "制片帮素材", url: "https://stock.zhipianbang.com/", desc: "音效下载" },
        { name: "Pic to Ico", url: "https://cn.pic2ico.com/", desc: "转成Ico格式" },
        { name: "url/html转换md", url: "https://www.helloworld.net/html2md", desc: "url/html转换md" },
        { name: "Icon Maker", url: "https://ray.so/icon", desc: "Ico图标制作" },
        { name: "YEELOGO", url: "http://www.yeelogo.com/#/", desc: "logo制作" },
        { name: "Doodlio", url: "https://doodlio.top/?url=biiii.com", desc: "涂鸦板-可录制" }, 
        { name: "奖状在线制作生成器", url: "https://jinengtisheng.com/apps/certificate-generator/#generator", desc: "奖状/证书" },
        { name: "在线批量生成word模板", url: "https://gallery.selfboot.cn/zh/tools/gendocx/temp", desc: "奖状/证书" },
        { name: "在线奖状", url: "https://class.acagrid.com/pc/post_certificate?source=1-aakit-jiangzhuang", desc: "奖状" },
        { name: "在线工具", url: "https://d1tools.com/tools", desc: "在线工具" },
        { name: "跟哈工具", url: "https://genha.com/", desc: "跟哈工具" },
        { name: "记灵在线工具", url: "https://remeins.com/", desc: "记灵在线工具" },
        { name: "微信文件传输助手", url: "https://filehelper.weixin.qq.com/", desc: "文件传输" },
        { name: "搜索公众号文章", url: "https://weixin.sogou.com/", desc: "公众号文章" },
        { name: "GitHub Proxy", url: "https://ghfast.top/", desc: "GitHub加速下载" },
        { name: "虾壳", url: "https://xiake.pro/", desc: "GitHub加速下载" },
        { name: "时间瓶子", url: "https://timebottle.toolooz.com/", desc: "时间小工具" },
        { name: "极简番茄", url: "https://t.kuaitu.cc/", desc: "时间小工具" },
        { name: "clipchamp", url: "https://app.clipchamp.com/", desc: "文字转语音" },
        { name: "AI speaker", url: "https://ai-speaker.net/", desc: "文字转语音" },
        { name: "Microsoft SAM TTS", url: "https://samtts.com/", desc: "文字转语音" },
        { name: "TTS", url: "https://t.leftsite.cn/", desc: "文字转语音" },
        { name: "TTS-Online", url: "https://acgn.ttson.cn/", desc: "文字转语音" },
        { name: "Azure TTS Web", url: "https://tts.femoon.top/cn", desc: "文字转语音" },
        { name: "EasyVoice", url: "https://easyvoice.ioplus.tech/", desc: "小说转语音工具" },
        { name: "在线转盘", url: "https://wheelpage.com/zh/", desc: "抽奖" },
        { name: "歌曲海", url: "https://www.gequhai.com/", desc: "搜歌词" },
        { name: "歌词易", url: "https://geciyi.com/", desc: "搜歌词" },
        { name: "LRC字幕编辑", url: "https://sanmusen214.github.io/web_lyric_editor/", desc: "字幕编辑" },
        { name: "字幕工具箱", url: "https://zm.i8k.tv/", desc: "字幕编辑" },
        { name: "字幕拼图", url: "https://quotemaker.cc/zh/", desc: "字幕拼图" },
        { name: "专业提词器", url: "https://www.best-teleprompter.com/zh", desc: "提词器" },
        { name: "词咕咕", url: "https://cugo.toolooz.com/", desc: "提词器" },
        { name: "Sign", url: "https://www.signo.cc/", desc: "流动字" },
        { name: "人民币大写转换功能", url: "https://www.dapidan.cn/app/rmb-daxie/", desc: "转换器" },
        { name: "英文字母大小写转换", url: "https://www.dapidan.cn/app/zimu-daxiaoxie/", desc: "转换器" },
        { name: "汉语拼音转换器", url: "https://www.dapidan.cn/app/pinyin/", desc: "转换器" },
        { name: "农历公历转换工具", url: "https://www.dapidan.cn/app/rili-zhuanhuan/", desc: "转换器" },
        { name: "简体繁体转换", url: "https://1000tool.com/text/chineseConvert", desc: "转换器" },
        { name: "中国传统色", url: "https://noneko.cn/", desc: "色系查询" },
        { name: "颜色代码表", url: "https://www.ysdaima.com/", desc: "色系查询" },
        { name: "BrandColors", url: "https://brandcolors.net/?ref=https://szsyw.cn", desc: "色系查询" },
        { name: "LOL Colors", url: "https://www.webdesignrankings.com/resources/lolcolors/?ref=https://szsyw.cn", desc: "色系查询" },
        { name: "Webgradients", url: "https://webgradients.com/?ref=https://szsyw.cn", desc: "色系查询" },
        { name: "Hidden word", url: "https://hidden-word.top/", desc: "Hidden word" },
        { name: "测速网", url: "https://www.speedtest.cn/?src=www.jspoo.com", desc: "测网速" },
        { name: "鼠标测试", url: "https://www.setupcheck.tech/zh/tools/mouse", desc: "电脑硬件测试" },
        { name: "手机号码归属地查询", url: "https://toolwa.com/phone/", desc: "归属地查询" },
        { name: "重量换算", url: "https://1000tool.com/unit/weight", desc: "计算器" },
        { name: "长度换算", url: "https://1000tool.com/unit/length", desc: "计算器" },
        { name: "温度换算", url: "https://1000tool.com/unit/temperature", desc: "计算器" },
        { name: "生日年龄计算器", url: "https://toolwa.com/age/", desc: "计算器" },
        { name: "在线育儿补贴计算器", url: "https://uutool.cn/children-allowance/", desc: "计算器" },
        { name: "劳法计算器", url: "https://web.laofa.com/calculator/?src=www.jspoo.com", desc: "计算器" },
        { name: "Bypass", url: "https://www.bypass.cn/", desc: "分流抢票" },
    ]
}, {
    id: 18, title: "专业软件", icon: "fa-cogs", websites: [
       { name: "Visual Studio Code", url: "https://code.visualstudio.com/", desc: "代码编辑器" },
        { name: "Python", url: "https://www.python.org/", desc: "Python语言" },
        { name: "FMEA COACH", url: "https://www.fmeacoach.com/#/", desc: "免费版FMEA 软件（终身免费）" },
        { name: "FreeSPC", url: "https://www.comcw.cn/pcsoft/6534.html", desc: "开源免费的 SPC 软件" },
        { name: "格式工厂", url: "http://pcgeshi.com/", desc: "格式转换" },
        { name: "ev录屏", url: "https://www.sootool.net/nexus/bi1/evluping.shtml?msclkid=1ea8e3bd237c12b4823d8b092c630dd1", desc: "录屏" },
        { name: "Everything", url: "https://www.voidtools.com/zh-cn/downloads/", desc: "文件检索" },
        { name: "Rustdesk", url: "https://www.rustdesk.com.cn/index.html", desc: "远程桌面" },
        { name: "GIMP", url: "https://gimp.org.cn/", desc: "图像处理" },
        { name: "Handbrake", url: "https://handbrake.fr/downloads.php", desc: "视频音频转码" },  
        { name: "OBS Studio", url: "https://s0ft.cuanfeng.cn/soft/261375.html?qhclickid=bcc94ddc253a8488", desc: "录屏" },  
        { name: "Libreoffice", url: "https://zh-cn.libreoffice.org/", desc: "办公套件" },          
        { name: "Umi-OCR", url: "https://gitee.com/mirrors/Umi-OCR#https://gitee.com/link?target=https%3A%2F%2Fhiroi-sora.lanzoul.com%2Fs%2Fumi-ocr", desc: "OCR" },
        { name: "FastStone Capture", url: "https://www.faststonecapture.cn/", desc: "截长图" },
        { name: "小旺AI截图", url: "https://www.xiaowang.com/", desc: "截长图" },
        { name: "PixPin", url: "https://pixpin.cn/", desc: "截长图" },
        { name: "Snapzy", url: "https://snapzy.app/download/", desc: "截长图macOS专用" },   
        { name: "Minitab入门手册", url: "https://www.minitab.com/zh-cn/support/documents/", desc: "手册下载" },
        { name: "Minitab操作步骤概述", url: "https://support.minitab.com/zh-cn/minitab/help-and-how-to/", desc: "操作步骤概述" },
        { name: "鹰迅办公", url: "https://www.inxunoffice.com/", desc: "批量文档处理" },
        { name: "我的ABC软件工具箱", url: "https://www.wodeabc.com/", desc: "批量文档处理" },
        { name: "7-Zip", url: "https://www.7-zip.org/", desc: "解压" },
        { name: "PeaZip", url: "https://peazip.github.io/download-installer-p-windows.html", desc: "解压" },
        { name: "Bandizip", url: "https://www.bandisoft.com/bandizip/", desc: "解压" },
        { name: "搜狗输入法", url: "https://shurufa.sogou.com/wap/pc", desc: "输入法" },
        { name: "讯飞输入法", url: "https://srf.xunfei.cn/index.html#/", desc: "输入法" },
        { name: "百度输入法", url: "https://shurufa.baidu.com/default", desc: "输入法" },
        { name: "微信输入法", url: "https://z.weixin.qq.com/", desc: "输入法" },
        { name: "WPS", url: "https://www.wps.cn/", desc: "文字处理" },
        { name: "水豚鼠标助手", url: "https://shuitunapp.com/?ref=https://szsyw.cn", desc: "屏幕演示" },
        { name: "Fengling", url: "https://fengling.nocmt.com/", desc: "剪贴板同步" },
        { name: "方方格子", url: "http://www.ffcell.com/", desc: "excel插件" },
        { name: "图床上传工具", url: "https://www.52pojie.cn/thread-2009036-1-1.html", desc: "免费图床上传工具" },
        { name: "51PPT模板", url: "https://www.51pptmoban.com/ppt-soft/", desc: "PPT插件" },
        { name: "Reeden", url: "https://reeden.app/cn", desc: "电子书阅读器" },
        { name: "Office Tool Plus", url: "https://otp.landian.vip/zh-cn/#google_vignette", desc: "一键部署Office" },
        { name: "机查查", url: "https://devink.techartlife.com/zh/", desc: "机查查" },
        { name: "电脑系统office激活", url: "https://github.com/massgravel/Microsoft-Activation-Scripts", desc: "电脑系统" },
        { name: "极简系统", url: "https://www.sysmini.com/", desc: "电脑系统" },
        { name: "MSDN系统", url: "https://www.xitongku.com/?src=www.jspoo.com", desc: "电脑系统" },
        { name: "HelloWindows.cn", url: "https://hellowindows.cn/", desc: "电脑系统" },
        { name: "动系统", url: "https://www.dongxitong.com/", desc: "电脑系统" },
        { name: "山己几子木", url: "https://msdn.sjjzm.com/win11.html?src=www.jspoo.com", desc: "电脑系统" },
    ]
}, {
    id: 19, title: "模板下载", icon: "fa-download", websites: [
        { name: "微软officePLUS", url: "https://www.officeplus.cn/", desc: "ppt/word/excel" },
        { name: "优品PPT", url: "https://www.ypppt.com/", desc: "ppt/ppt元素/课件/字体" },
        { name: "爱PPT", url: "https://www.2ppt.com/", desc: "ppt" },
        { name: "第1PPT", url: "https://www.1ppt.com/tags/419/", desc: "ppt/ppt元素/字体/音效/课件" },
        { name: "亿库在线", url: "http://www.ykzx.cn/?url=biiii.com", desc: "ppt/素材/背景" }, 
        { name: "PPT.CDTools", url: "https://ppt.cdtools.click/", desc: "ppt" },    
        { name: "站长素材", url: "https://sc.chinaz.com/ppt/", desc: "ppt/图片/简历/字体/音效/PSD" },
        { name: "51PPT模板", url: "https://www.51pptmoban.com/", desc: "ppt/ppt工具箱" },
        { name: "PPT超级市场", url: "https://www.pptsupermarket.com/", desc: "ppt/ppt元素" },
        { name: "枣知网", url: "https://www.51zaozhi.com/", desc: "ppt/word/excel" },
        { name: "PPTer吧", url: "https://ppter8.com/ppter/peixunziliao.html", desc: "培训PPT模板" },
        { name: "爱给", url: "https://www.aigei.com/set/peixunkejian_ppt.html", desc: "培训PPT模板" },
        { name: "量子办公", url: "http://jiezouba.com/index.html", desc: "范本" },
        { name: "简历下载", url: "https://jianlixiazai.cn/", desc: "简历" },
        { name: "UP简历", url: "https://upcv.tech/?invite=INV0B8V447K", desc: "简历" },
        { name: "简历模板资源网", url: "https://www.jianlimoban-ziyuan.com/?url=biiii.com", desc: "简历" },
        { name: "免费论文分享", url: "http://www.hi138.com/?url=biiii.com", desc: "" },
        { name: "Boss协会", url: "https://www.bosspim.com/", desc: "标准/资料（每日限3份）" },
        { name: "HISISO机构", url: "https://www.hisiso.com/GLWJ/JXCXWJ/367.html", desc: "程序文件下载" },
        { name: "文档解析助手", url: "http://125.208.22.28:8080/zhushou/?code=3pK8duHBI1LFszVyj", desc: "文档解析助手" },
        { name: "大角牛下载助手", url: "https://share.note.youdao.com/s/8gYD5DD0", desc: "文档下载" },
        { name: "办公汇", url: "https://www.bgbgh.com/", desc: "文档下载（每日1次）" },
        { name: "GitCode", url: "https://gitcode.com/Open-source-documentation-tutorial", desc: "开源文档下载" },
        { name: "Z-Library", url: "https://zh.zlib.by/", desc: "书籍下载" },
        { name: "鸠摩搜书", url: "https://www.jiumodiary.com/", desc: "书籍下载" },
        { name: "时光图书馆", url: "https://atimebook.com/", desc: "书籍下载" },
        { name: "SaltyLeo", url: "https://tstrs.me/search", desc: "书籍下载" },
        { name: "书格", url: "https://www.shuge.org/", desc: "书籍下载" },
        { name: "Libgen", url: "https://libgen.ee/index.html", desc: "书籍下载" },
        { name: "读书阁", url: "https://duzhege.cn/", desc: "电子杂志下载" },
        { name: "文捕", url: "https://www.blog-keeper.com/", desc: "文章解析工具" },
        { name: "知识星球", url: "https://wx.zsxq.com/login", desc: "资料下载" },
        { name: "百度文库", url: "https://wenku.baidu.com/?fr=brandad_2&_wkts_=1755328356957", desc: "资料下载" },
        { name: "道客巴巴", url: "https://m.doc88.com/", desc: "资料下载" },
        { name: "豆丁", url: "https://www.docin.com/", desc: "资料下载" },
        { name: "原创力文档", url: "https://max.book118.com/", desc: "资料下载" },
        { name: "腾讯文档", url: "https://docs.qq.com/desktop/?nlc=1", desc: "资料下载" },
        { name: "仪器信息网", url: "https://www.instrument.com.cn/", desc: "资料下载" },
        { name: "OpenSpeedy", url: "https://github.com/game1024/OpenSpeedy", desc: "百度网盘加速" },
        { name: "飞搜侠", url: "https://www.feisoo.com/", desc: "云盘搜索" },
        { name: "小兔搜搜", url: "https://xiaotusoso.com/", desc: "云盘搜索" },
        { name: "如风搜", url: "https://sobaozang.com/", desc: "云盘搜索" },
        { name: "我能搜", url: "https://www.wnsearch.top/", desc: "夸克网盘搜索" },
        { name: "学搜搜", url: "https://www.xuesousou.net/", desc: "云盘搜索" },
        { name: "学霸盘", url: "https://www.xuebapan.com/", desc: "云盘搜索" },
        { name: "西瓜搜搜", url: "http://www.xgsoso.com/", desc: "百度云搜索" },
        { name: "秒搜", url: "https://miaosou.fun/", desc: "云盘搜索" },
        { name: "爱盘搜", url: "https://aipanso.com/", desc: "云盘搜索" },
        { name: "小白盘", url: "https://www.xiaobaipan.com/", desc: "云盘搜索" },
        { name: "易搜", url: "https://yiso.fun/", desc: "云盘搜索" },
        { name: "趣盘搜", url: "https://pan.funletu.com/", desc: "云盘搜索" },
        { name: "盘他一下", url: "https://panothers.com/", desc: "云盘搜索" },
        { name: "UP云搜", url: "https://www.upyunso.com/", desc: "云盘搜索" },
        { name: "千帆搜索", url: "https://pan.qianfan.app/", desc: "云盘搜索" },
        { name: "快手视频解析", url: "https://kuaishou-video-download.com/zh", desc: "短视频下载" },
        { name: "小红书视频解析", url: "https://www.xhs-download.org/zh", desc: "短视频下载" },
        { name: "考拉解析", url: "http://www.zanqianba.com/", desc: "短视频下载" },
]
}, {
    id: 20, title: "AI模型", icon: "fa-robot", websites: [
        { name: "DeepSeek", url: "https://chat.deepseek.com/sign_in", desc: "在线AI" },
        { name: "ima", url: "https://ima.qq.com/?webFrom=10000028", desc: "在线AI" },
        { name: "豆包", url: "https://www.doubao.com/chat/?channel=baidu_pz&from_login=1", desc: "在线AI" },
        { name: "TRAE WORK", url: "https://work.trae.cn/?utm_source=content&utm_medium=doc_solo&utm_campaign=quickstart&mode=mtc", desc: "在线AI" },
        { name: "WorkBuddy", url: "https://www.codebuddy.cn/work/?fromSource=gwzcw.12117220.12117220.12117220&utm_medium=cpc&utm_id=gwzcw.12117220.12117220.12117220&msclkid=c334d204d0941fbf4f34b8417e9f9a37", desc: "自动化AI-软件" },
        { name: "Agnes", url: "https://agnes-ai.com/", desc: "AI API" },  
        { name: "智谱", url: "https://bigmodel.cn/usercenter/settings/auth", desc: "AI API" },  
        { name: "Agnes Code", url: "https://agnes-ai.com/agnescode", desc: "软件" },     
        { name: "Opencode", url: "https://opencode.ai/zh/download", desc: "软件" },    
        { name: "元宝", url: "https://yuanbao.tencent.com/chat/naQivTmsDa", desc: "在线AI" },
        { name: "Marvis", url: "https://marvis.qq.com/", desc: "自动化AI-软件" },
        { name: "ardot", url: "https://ardot.tencent.com/", desc: "AI-搞设计" },
        { name: "Miora", url: "https://miora.design/home", desc: "AI-搞设计" },      
        { name: "Kimi", url: "https://www.kimi.com/?chat_enter_method=change_model", desc: "在线AI" },  
        { name: "Ollama", url: "https://ollama.com/", desc: "本地部署AI模型" },     
        { name: "千问", url: "https://www.qianwen.com/chat", desc: "在线AI" },
        { name: "WPS灵犀", url: "https://lingxi.wps.cn/echo", desc: "AI生成文档" },
        { name: "飞书多维表格", url: "https://acnkgpefayvj.feishu.cn/base", desc: "在线AI" },
        { name: "Xiaomi MlMo Studio", url: "https://aistudio.xiaomimimo.com/# ", desc: "小米AI" },
        { name: "MindVideo", url: "https://www.mindvideo.ai/zh/text-to-video/", desc: "视频生成" },
        { name: "去sora2水印", url: "https://nosorawm.app/zh", desc: "去sora2水印" },
        { name: "即梦AI", url: "https://jimeng.jianying.com/ai-tool/home/?utm_medium=bingpc&utm_source=pinzhuan&utm_campaign=button", desc: "视频生成" },
        { name: "可灵AI", url: "https://app.klingai.com/cn/image-to-video/frame-mode/new?ra=4", desc: "视频生成" },
        { name: "呜哩AI", url: "https://wuli.art/generate", desc: "视频生成" },
        { name: "百度AI", url: "https://chat.baidu.com/search?isShowHello=1&extParams=%7B%22out_enter_type%22%3A%22sidebar_dialog%22%2C%22enter_type%22%3A%22sidebar_dialog%22%2C%22forceRefresh%22%3Atrue%7D", desc: "在线AI" },
        { name: "讯飞星火", url: "https://xinghuo.xfyun.cn/", desc: "在线AI" },
        { name: "火山方舟", url: "https://www.volcengine.com/experience/ark", desc: "在线AI" },
        { name: "腾讯问卷", url: "https://wj.qq.com/ai/generate.html", desc: "AI生成问卷" },
        { name: "小艺", url: "https://xiaoyi.huawei.com/chat/", desc: "华为小艺AI" },
        { name: "小布助手", url: "https://xiaobu.coloros.com/chat", desc: "OPPO小布AI" },
        { name: "灵光", url: "https://www.lingguang.com/chat", desc: "在线AI" },
        { name: "扣子空间", url: "https://space.coze.cn/?from=landingpage&keywordid=%E6%89%A3%E5%AD%90%E7%A9%BA%E9%97%B4-&msclkid=beda8a449f5a1495141ee2f6e949910b&utm_campaign=486599295&utm_content=home&utm_id=0&utm_medium=sem&utm_source=bing&utm_source_platform=pc&utm_term=coze_bing_sem_dm_cpc_pc_czkj_pp_guanw_1&category=7524912604796452873", desc: "在线AI" },
        { name: "TRAE", url: "https://www.trae.cn/sem?utm_source=bing&utm_medium=bing_sem&utm_campaign=486432838&utm_term=trae_bing_sem_dm_pc_cpc_tongy_aibczs_dmsc_1&msclkid=631e30d0a1751fa2ce4e582fd990f7a3", desc: "代码生成软件" },
        { name: "CodeBuddy", url: "https://copilot.tencent.com/?utm_source=maomu.com", desc: "代码生成软件" },
        { name: "腾讯云代码助手", url: "https://copilot.tencent.com/chat/", desc: "代码生成" },
        { name: "秘塔AI搜索", url: "https://metaso.cn/", desc: "在线AI" },
        { name: "知乎直答", url: "https://zhida.zhihu.com/?utm_source=maomu.com", desc: "在线AI" },
        { name: "纳米AI", url: "https://www.n.cn/?utm_source=maomu.com", desc: "在线AI" },
        { name: "墨刀AI", url: "https://modao.cc/?utm_source=maomu.com#", desc: "在线AI" },
        { name: "天工AI", url: "https://www.tiangong.cn/", desc: "在线AI" },
        { name: "腾讯混元", url: "https://hunyuan.tencent.com/?utm_source=maomu.com", desc: "在线AI" },
        { name: "夸克AI", url: "https://ai.quark.cn/?utm_source=maomu.com", desc: "在线AI" },
        { name: "ChatGPT", url: "https://chatgpt.com", desc: "在线AI" },
        { name: "Gemini", url: "https://gemini.google.com/app", desc: "在线AI" },
        { name: "Google AI Studio", url: "https://aistudio.google.com/", desc: "在线AI" },
        { name: "文小言", url: "https://yiyan.baidu.com/", desc: "在线AI" },
    ]
}, {
    id: 21, title: "常用网站", icon: "fa-link", websites: [
       { name: "GitHub", url: "https://github.com/", desc: "GitHud" },
        { name: "AxureShow", url: "https://www.axureshow.com/", desc: "HTML代码托管平台|艾可秀" },
        { name: "微软翻译", url: "https://cn.bing.com/translator", desc: "在线翻译" },
        { name: "DeepL翻译", url: "https://www.deepl.com/zh/translator", desc: "在线翻译" },
        { name: "有道翻译", url: "https://fanyi.youdao.com/#/TextTranslate", desc: "在线翻译" },
        { name: "谷歌翻译", url: "https://translate.google.com/", desc: "在线翻译" },
        { name: "沉浸式翻译", url: "https://immersivetranslate.com/docs/installation/", desc: "pdf翻译" },
        { name: "Ilovepdf", url: "https://www.ilovepdf.com/zh-cn/translate-pdf", desc: "pdf翻译" },
        { name: "ViiTor Translate", url: "https://www.viitor.info/", desc: "在线视频实时翻译" },
        { name: "问卷星", url: "https://www.wjx.cn/newwjx/manage/myquestionnaires.aspx?randomt=1744110951", desc: "问卷调查" },
        { name: "知乎", url: "https://www.zhihu.com/", desc: "搜索" },
        { name: "百度一下", url: "https://www.baidu.com/index.php?tn=75144485_2_dg&ch=1", desc: "百度搜索" },
        { name: "Google", url: "https://www.google.com.hk/index.html", desc: "谷歌搜索" },
        { name: "Bing", url: "https://cn.bing.com/", desc: "微软搜索" },
        { name: "微信公众平台", url: "https://mp.weixin.qq.com/", desc: "自媒体" },
        { name: "视频号助手", url: "https://channels.weixin.qq.com/login.html", desc: "自媒体" },
        { name: "抖音", url: "https://www.douyin.com//", desc: "自媒体" },
        { name: "小红书", url: "https://www.xiaohongshu.com/explore?language=zh-CN", desc: "自媒体" },
        { name: "头条号", url: "https://mp.toutiao.com/auth/page/login?redirect_url=JTJGcHJvZmlsZV92NCUyRg==", desc: "自媒体" },
        { name: "快手", url: "https://www.kuaishou.com/brilliant", desc: "自媒体" },
        { name: "腾讯微视", url: "https://h5.weishi.qq.com/weishi/account/login?r_url=http%3A%2F%2Fmedia.weishi.qq.com%2F", desc: "自媒体" },
        { name: "123云盘", url: "https://www.123pan.com/", desc: "网盘" },
        { name: "夸克网盘", url: "https://pan.quark.cn/", desc: "网盘" },
        { name: "阿里云盘", url: "https://www.alipan.com/", desc: "网盘" },
        { name: "12306", url: "https://www.12306.cn/index/", desc: "中国铁路" },
    ]
}, {
    id: 22, title: "资源网站", icon: "fa-folder-open", websites: [
       { name: "科淘科研导航", url: "https://www.bioscitao.com/", desc: "资源合集" },
        { name: "理白嫖资源站", url: "https://byepiao.com/", desc: "资源合集" },
        { name: "聚神铺导航", url: "https://www.jspoo.com/", desc: "资源合集" },
        { name: "吾爱破解", url: "https://www.52pojie.cn/", desc: "资源合集" },
        { name: "乐于分享网", url: "https://fffxx.com/page/2", desc: "软件分享" },
        { name: "开源精选", url: "https://www.ossnav.com/", desc: "软件/工具分享" },
        { name: "资源库", url: "https://biiii.com/", desc: "资源合集" },
        { name: "BigeTools", url: "https://bigezhang.com/tools?category=image", desc: "资源合集" },
        { name: "图钉办公", url: "https://www.tudingyy.com/", desc: "资源合集" },
        { name: "FMHY", url: "https://fmhy.net/", desc: "资源合集" },
        { name: "优设导航", url: "https://hao.uisdc.com/", desc: "资源合集" },
        { name: "HiPPTer", url: "https://www.hippter.com/", desc: "资源合集" },
        { name: "YOYO导航", url: "https://yoyonav.com/", desc: "资源合集" },
        { name: "库房kf369.cn", url: "https://kf369.cn/#term-2资源集合", desc: "资源合集" },
        { name: "万有导航", url: "https://wanyouw.com/", desc: "资源合集" },
        { name: "办公人导航", url: "https://www.bgrdh.com/", desc: "资源合集" },
        { name: "toolfk", url: "https://www.toolfk.com/", desc: "资源合集" },
        { name: "一糖导航", url: "https://iitang.com/#term-6115", desc: "资源合集" },
        { name: "slaw", url: "https://www.oslaw.cn/site-nav", desc: "资源合集" },
    ]
}, {
    id: 23, title: "图库", icon: "fa-images", websites: [
        { name: "Unsplash", url: "https://unsplash.com", desc: "图" },
        { name: "Pixabay", url: "https://www.pixabay.com", desc: "图" },
        { name: "Reshot", url: "https://www.reshot.com", desc: "图" },
        { name: "Colorhub", url: "https://colorhub.me", desc: "图" },
        { name: "Wallpaper Cave", url: "https://wallpapercave.com/", desc: "电脑壁纸" },
        { name: "暖糖壁纸", url: "https://www.nuantang.net/", desc: "电脑壁纸" },
        { name: "轻壁纸", url: "https://qingbizhi.com/", desc: "电脑壁纸" },
        { name: "大图居", url: "https://www.datuju.com/bizhi/", desc: "电脑壁纸" },
        { name: "哲风壁纸", url: "https://haowallpaper.com/", desc: "电脑壁纸" },
        { name: "恋风壁纸", url: "https://www.luvbree.com/", desc: "电脑壁纸（不登录免5/天，登录免15/天）" },
        { name: "菜鸟图标", url: "https://icon.sucai999.com/", desc: "图标" },
    ]
}, {
    id: 24, title: "学教程", icon: "fa-graduation-cap", websites: [
        { name: "技能看点", url: "https://wrf00123.github.io/tool6.html", desc: "教程查询" },
        { name: "懒人Excel", url: "https://www.lanrenexcel.com/", desc: "Excel教程" },
        { name: "Excel之家", url: "https://www.excelhome.net/", desc: "Excel教程" },
        { name: "Word联盟", url: "https://www.wordlm.cn/", desc: "Word教程" },
        { name: "优品PPT", url: "https://www.ypppt.com/jiaocheng/", desc: "PPT教程" },
        { name: "51PPT模板", url: "https://www.51pptmoban.com/jiaocheng/", desc: "PPT教程" },
        { name: "我要自学网", url: "https://www.51zxw.net/List.aspx?cid=3", desc: "PPT教程" },
        { name: "方方格子不显示", url: "http://ffcell.com/WenKu/Data/2016051616004881.html", desc: "方方格子不显示教程" },
        { name: "基础教程网", url: "https://teliute.org/?url=biiii.com", desc: "电脑/软件" },
    ]
}, {
    id: 25, title: "学习网站", icon: "fa-book-open", websites: [
        { name: "TREA知识库", url: "https://bytedance.larkoffice.com/wiki/RxVXweukSi7JtIkhOKBcuSlbnfC", desc: "AI知识库" },
        { name: "中国高等教育学生信息网", url: "https://www.chsi.com.cn/", desc: "学信网" },
        { name: "国家智慧教育公共服务平台", url: "https://www.smartedu.cn/", desc: "教育" },    
        { name: "国家中小学智慧教育平台", url: "https://basic.smartedu.cn/", desc: "教育" },  
        { name: "国家高等教育智慧教育平台", url: "https://higher.smartedu.cn/", desc: "教育" },  
        { name: "国家研究生智慧教育平台", url: "https://graduate.smartedu.cn/", desc: "教育" },  
        { name: "国家智慧教育读书平台", url: "https://reading.smartedu.cn/youth", desc: "教育" },  
        { name: "终身教育平台", url: "https://le.ouchn.cn/home", desc: "教育" },  
        { name: "中国国家数字图书馆", url: "https://www.nlc.cn/web/index.shtml", desc: "教育" },  
        { name: "中国国家数字图书馆", url: "https://www.nlc.cn/web/index.shtml", desc: "教育" }, 
        { name: "国家哲学社会科学文献中心", url: "https://www.ncpssd.cn/", desc: "教育" }, 
        { name: "中国大学MOOC", url: "https://www.icourse163.org/", desc: "教育" }, 
        { name: "中国国家数字图书馆", url: "https://www.nlc.cn/web/index.shtml", desc: "教育" }, 
        { name: "央视网（CCTV）", url: "https://tv.cctv.com/", desc: "教育" },   
        { name: "中国知网", url: "https://www.cnki.net/", desc: "学术文献" },
        { name: "麦肯锡中国", url: "https://www.mckinsey.com.cn/", desc: "麦肯锡季刊/行业研究报告/管理案例" },
        { name: "世界经理人", url: "https://www.ceconline.com/", desc: "商业管理资讯/经理人社区/职业发展" },
        { name: "OBPM", url: "http://www.obpm.org/download.html#", desc: "流程管理开放平台" },
        { name: "PMI", url: "https://www.pmichina.org/", desc: "项目管理协会" },
        { name: "数字素养网", url: "https://szsyw.cn/jiaoshi", desc: "学习" },
        { name: "国家中小学云课堂", url: "https://web-bd.ykt.eduyun.cn/", desc: "学习" },
        { name: "语文迷", url: "https://www.yuwenmi.com/?ref=https://szsyw.cn", desc: "学习" },
        { name: "第一范文网", url: "https://www.diyifanwen.com/", desc: "范文学习" },
        { name: "优文网", url: "https://www.unjs.com/", desc: "范文学习" },
        { name: "天天作文网", url: "https://www.t262.com/?ref=https://szsyw.cn", desc: "作文学习" },
        { name: "查字典作文网", url: "https://zuowen.chazidian.com/", desc: "作文学习" },
        { name: "大学生自学网", url: "http://v.dxsbb.com/index.html", desc: "学习" },
        { name: "大学资源网", url: "https://www.dxzy163.com/", desc: "学习" },
        { name: "考试酷", url: "https://www.examcoo.com/", desc: "学习" },
        { name: "淘宝教育", url: "https://daxue.taobao.com/", desc: "学习" },
        { name: "学堂在线", url: "https://www.xuetangx.com/", desc: "学习" },
        { name: "多邻国", url: "https://www.duolingo.com/learn", desc: "英语学习" },
        { name: "VOA Learning English", url: "https://learningenglish.voanews.com/", desc: "英语学习" },
        { name: "BBC Learning English", url: "https://www.bbc.co.uk/learningenglish/", desc: "英语学习" },
        { name: "可可英语", url: "语https://www.kekenet.com/", desc: "英语学习" },
        { name: "英语巴士网", url: "https://www.engbus.cn/", desc: "英语学习" },
        { name: "英语口语网", url: "http://www.ny-yy.com/", desc: "英语学习" },
        { name: "Ries", url: "https://ries.ai/zh/learn-english", desc: "英语学习" },
        { name: "LetMeEnglish.com", url: "https://letmeenglish.com/", desc: "英语学习" },
        { name: "English Daily", url: "https://englishdaily.ai/", desc: "英语学习" },
        { name: "田间小站", url: "https://www.tjxz.cc/", desc: "英语学习" },
        { name: "英语小说网", url: "https://yingyuxiaoshuo.com/", desc: "英语小说" },
        { name: "元素周期表", url: "https://pt.ziziyi.com/", desc: "元素周期表" },
        { name: "元素周期表2", url: "https://www.dapidan.cn/app/yuansu-zqb/", desc: "元素周期表" },
        { name: "历史人物网", url: "https://www.lishirenwu.com/?src=www.jspoo.com", desc: "历史人物网" },
        { name: "看典古籍", url: "https://www.kandianguji.com/?src=www.jspoo.com", desc: "看典古籍" },
        { name: "中国历史朝代顺序表", url: "https://www.lishimingren.com/chaodai/?src=www.jspoo.com", desc: "中国历史朝代顺序表" },
        { name: "中国历史地名", url: "https://newarchive.ihp.sinica.edu.tw/hplname/placename/basic/", desc: "中国历史地名" },
        { name: "中国诗人资料馆", url: "https://www.shiren.org/?src=www.jspoo.com", desc: "中国诗人资料馆" },
        { name: "世界各国国旗", url: "https://flagpedia.asia/?src=www.jspoo.com", desc: "世界各国国旗" },
        { name: "小故事铺", url: "https://storynook.cn/", desc: "小故事" },
        { name: "汉字笔顺", url: "https://www.hanzipi.com/?src=www.jspoo.com", desc: "汉字笔顺" },
        { name: "普通高等学校名单", url: "https://uutool.cn/info-college/", desc: "普通高等学校名单" },
        { name: "下厨房", url: "https://m.xiachufang.com/", desc: "菜谱查询" },
        { name: "网上厨房", url: "https://www.xiaochushuo.com/", desc: "菜谱查询" },
    ]
}, {
    id: 26, title: "科普网站", icon: "fa-lightbulb", websites: [
        { name: "未来论坛", url: "https://www.futureforum.org.cn/?ref=https://szsyw.cn", desc: "科普" },
        { name: "中国消防杂志网", url: "https://zgxf.magtechjournal.com/CN/home", desc: "科普" },
        { name: "科普中国网", url: "https://www.kepuchina.cn/?ref=https://szsyw.cn", desc: "科普" },
        { name: "中国气象科普网", url: "http://www.qxkp.net/?ref=https://szsyw.cn", desc: "科普" },
        { name: "中国科普博览", url: "https://www.kepu.net.cn/?ref=https://szsyw.cn", desc: "科普" },
        { name: "科学网", url: "https://www.sciencenet.cn/?ref=https://szsyw.cn", desc: "科普" },
        { name: "中国数字科技馆", url: "https://www.cdstm.cn/", desc: "科普" },
        { name: "中国国家地理", url: "http://www.dili360.com/?ref=https://szsyw.cn", desc: "科普" },
        { name: "果壳科技有意思", url: "https://www.guokr.com/", desc: "科普" },
        { name: "维科普", url: "https://www.wkepu.com/?ref=https://szsyw.cn", desc: "科普" },
        { name: "中国考古", url: "http://kaogu.cssn.cn/zwb/?ref=https://szsyw.cn", desc: "科普" },
        { name: "网易探索", url: "https://discovery.163.com/?ref=https://szsyw.cn", desc: "科普" },
        { name: "实时台风消息", url: "https://typhoon.slt.zj.gov.cn/#/", desc: "科普" },
        { name: "新华网", url: "https://www.news.cn/", desc: "新闻" },
        { name: "人民网", url: "https://www.people.cn/", desc: "新闻" },
        { name: "央视网", url: "https://www.cctv.com/", desc: "新闻" },
        { name: "中国新闻网", url: "https://www.chinanews.com/", desc: "新闻" },
        { name: "中国经济网", url: "http://www.ce.cn/", desc: "新闻" },
        { name: "学习强国", url: "https://www.xuexi.cn/", desc: "新闻" },
        { name: "求是网", url: "https://www.qstheory.cn/", desc: "新闻" },
        { name: "中国文明网", url: "http://www.wenming.cn/", desc: "新闻" },
    ]
}, {
    id: 27, title: "有趣网站", icon: "fa-gamepad", websites: [
        { name: "各种测试", url: "https://www.zxgj.cn/?src=www.jspoo.com", desc: "测试" },
        { name: "EyeTest Online", url: "https://eyetestonline.org/?url=biiii.com", desc: "在线眼力测试" },       
        { name: "SBTI测试", url: "https://sbti.11ai.cn/#:~:text=SBTI%E4%BA%BA%E6%A0%BC%E6%B5%8B%E8%AF%95%E5%AE%98%E7%BD%91%E4%B8%BA%E4%BD%A0%E6%8F%90%E4%BE%9B%E5%85%8D%E8%B4%B9%E3%80%81%E5%BF%AB%E9%80%9F%E3%80%81%E9%AB%98%E7%B2%BE%E5%87%86%E7%9A%84%E6%80%A7%E6%A0%BC%E6%B5%8B%E8%AF%84%E6%9C%8D%E5%8A%A1%EF%BC%8C%E6%97%A0%E9%9C%80%E5%A4%8D%E6%9D%82%E6%AD%A5%E9%AA%A4%EF%BC%8C%E6%89%93%E5%BC%80%E5%85%A5%E5%8F%A3%E5%8D%B3%E5%8F%AF%E5%BC%80%E5%A7%8B%E6%B5%8B%E8%AF%95%E3%80%82,%E5%B9%B3%E5%8F%B0%E7%BB%93%E5%90%88%E7%8E%B0%E4%BB%A3%E5%BF%83%E7%90%86%E5%AD%A6%E4%B8%8E%E5%B9%B4%E8%BD%BB%E7%BE%A4%E4%BD%93%E7%89%B9%E7%82%B9%EF%BC%8C%E6%89%93%E9%80%A0%E8%BD%BB%E6%9D%BE%E6%98%93%E6%87%82%E7%9A%84%E6%80%A7%E6%A0%BC%E8%A7%A3%E8%AF%BB%E6%8A%A5%E5%91%8A%EF%BC%8C%E6%94%AF%E6%8C%81%E7%BB%93%E6%9E%9C%E4%BF%9D%E5%AD%98%E3%80%81%E7%A4%BE%E4%BA%A4%E5%88%86%E4%BA%AB%E4%B8%8E%E4%BA%BA%E6%A0%BC%E5%8C%B9%E9%85%8D%E5%8A%9F%E8%83%BD%E3%80%82%20%E6%97%A0%E8%AE%BA%E6%98%AF%E8%87%AA%E6%88%91%E8%AE%A4%E7%9F%A5%E3%80%81%E6%81%8B%E7%88%B1%E4%BA%A4%E5%8F%8B%E8%BF%98%E6%98%AF%E8%81%8C%E5%9C%BA%E6%B2%9F%E9%80%9A%EF%BC%8CSBTI%E9%83%BD%E8%83%BD%E4%B8%BA%E4%BD%A0%E6%8F%90%E4%BE%9B%E6%9C%89%E8%B6%A3%E5%8F%88%E5%AE%9E%E7%94%A8%E7%9A%84%E5%8F%82%E8%80%83%EF%BC%8C%E6%88%90%E4%B8%BA%E6%96%B0%E4%B8%80%E4%BB%A3%E5%B9%B4%E8%BD%BB%E4%BA%BA%E6%9C%80%E7%88%B1%E7%9A%84%E6%80%A7%E6%A0%BC%E6%8E%A2%E7%B4%A2%E7%A5%9E%E5%99%A8%E3%80%82", desc: "测试" },
        { name: "在线空调", url: "https://toolwa.com/ac/", desc: "模拟" },
        { name: "win12网页版", url: "https://tjy-gitnub.github.io/win12/desktop.html", desc: "模拟" },
        { name: "XP系统模拟器", url: "https://hackspoof.tonghei.com/windows-xp-simulator/", desc: "模拟" },
        { name: "wins98系统模拟器", url: "https://www.windows93.net/#!/", desc: "模拟" },
        { name: "抛硬币", url: "https://uutool.cn/coin/", desc: "模拟" },
        { name: "3D地球", url: "https://3d-app.yunser.com/earth/", desc: "模拟" },
        { name: "地球旧照", url: "https://3d-app.yunser.com/plateMotion/", desc: "模拟" },
        { name: "请画一个小人", url: "https://www.webhek.com/post/draw-a-stickman/", desc: "游戏" },
        { name: "到底是谁没动", url: "http://emojisandearthporn.com/", desc: "游戏" },
        { name: "在线拼魔方", url: "https://tools.bqrdh.com/rubiks-cube/", desc: "游戏" },
        { name: "小霸王", url: "https://www.yikm.net/", desc: "游戏" },
        { name: "自由钢琴", url: "https://www.autopiano.cn/#google_vignette", desc: "游戏" },
        { name: "Poki", url: "https://poki.com/zh", desc: "游戏" },
        { name: "千米游戏", url: "https://www.yikm.net/", desc: "游戏" },
        { name: "Weave Silk", url: "http://weavesilk.com/", desc: "对称光影绘画工具" },
        { name: "Bongo Cat", url: "https://bongo.cat/", desc: "互动网站" },
        { name: "全球气候", url: "https://zoom.earth/", desc: "环境" },
        { name: "环游世界", url: "https://www.airpano.org.cn/", desc: "风景" },
        { name: "狗屁不通文章生成器", url: "https://suulnnka.github.io/BullshitGenerator/index.html", desc: "文章" },
        { name: "能不能好好说话", url: "https://lab.magiconch.com/nbnhhsh/", desc: "句子" },
        { name: "彩虹屁生成器", url: "https://chp.shadiao.pro/?from_nmsl", desc: "句子" },
        { name: "励志句子", url: "https://1000tool.com/text/lizhi", desc: "句子" },
        { name: "毒鸡汤", url: "https://1000tool.com/text/duJiTang", desc: "句子" },
        { name: "中午吃什么", url: "https://chishenme.xyz/", desc: "句子" },
    ]
}, {
    id: 28, title: "邮箱", icon: "fa-envelope", websites: [
        { name: "163邮箱", url: "https://mail.163.com/", desc: "邮箱" },
        { name: "QQ邮箱", url: "https://mail.qq.com/", desc: "邮箱" },
        { name: "Agent Mail", url: "https://agent.qq.com/", desc: "AI邮箱" },
        { name: "126邮箱", url: "https://126.com/", desc: "邮箱" },
        { name: "139邮箱", url: "https://mail.10086.cn/default.html?mtime=2", desc: "邮箱" },
        { name: "189邮箱", url: "https://webmail30.189.cn/w2/index.html", desc: "邮箱" },
        { name: "Gmail", url: "https://workspace.google.com/intl/zh-CN/gmail/", desc: "邮箱" },
        { name: "outlook", url: "https://www.microsoft.com/zh-cn/microsoft-365/outlook/email-and-calendar-software-microsoft-outlook?deeplink=%2fmail%2f0%2f%3fnlp%3d0&sdf=0", desc: "邮箱" },
        { name: "腾讯企业邮箱", url: "https://exmail.qq.com/login", desc: "邮箱" },
        { name: "Yeah邮箱", url: "https://www.yeah.net/", desc: "邮箱" },
        { name: "阿里邮箱", url: "https://www.ali-exmail.cn/Land/", desc: "邮箱" },
        { name: "沃邮箱", url: "https://mail.wo.cn/#mobile", desc: "邮箱" },
        { name: "搜狐闪电邮箱", url: "https://mail.sohu.com/fe/#/login", desc: "邮箱" },
        { name: "tom邮箱", url: "https://mail.tom.com/", desc: "邮箱" },
        { name: "新浪邮箱", url: "https://mail.sina.com.cn/", desc: "邮箱" },
        { name: "Foxmail", url: "https://www.foxmail.com/", desc: "邮箱软件" },
        { name: "Temporam", url: "https://www.temporam.com/zh", desc: "临时邮箱" },
        { name: "zrfme", url: "https://mail.zrfme.com/", desc: "临时邮箱" },
        { name: "临时邮箱", url: "https://tempmailto.online/zh/", desc: "临时邮箱" },
        { name: "MoeMail", url: "https://moemail.app/", desc: "临时邮箱" },
    ]
}, {
    id: 29, title: "其他", icon: "fa-ellipsis-h", websites: [
        { name: "全国房价行情", url: "https://m.creprice.cn/", desc: "查询" },
        { name: "天下老照片", url: "http://www.laozhaopian5.com/", desc: "老照片" },
        { name: "影视", url: "https://yinghezhinan.com/sites/zaixian/", desc: "影视" },
    ]
}];

const GROUP_MAP = {
    '标准': [1, 2, 3, 4, 5, 6, 7, 8, 9, 30],
    '商务': [10, 11, 31, 12, 13, 14],
    '工具': [15, 16, 17, 18],
    '资源': [19, 20, 21, 22, 23],
    '学习': [24, 25, 26, 27],
    '其他': [28, 29]
};
const GROUP_NAMES = ['全部', '标准', '商务', '工具', '资源', '学习', '其他'];

function groupOf(id) {
    for (const [g, ids] of Object.entries(GROUP_MAP)) {
        if (ids.includes(id)) return g;
    }
    return '其他';
}

// ========================================================================
//  状态 & 持久化
// ========================================================================
const STORAGE_KEY = 'bookmarks-app-state-v2';
const SESSION_KEY = 'bookmarks-session-v1';   // 收藏 / 访问统计：仅当前会话，关闭浏览器清空
const RECENT_KEY = 'bookmarks-recent-session-v1';
const RECENT_MAX = 40;

let state = null;
let _uidSeq = 0;

function genUid() {
    return 'u' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}
function genCatId() {
    return 'c' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
}

function seedState() {
    const categories = RAW_DATA.map(cat => ({
        id: cat.id,
        title: cat.title,
        icon: cat.icon,
        group: groupOf(cat.id),
        seed: true,
        websites: cat.websites.map((w, i) => ({
            uid: genUid(),
            name: w.name,
            url: w.url,
            desc: w.desc || '',
            order: i,
            seed: true
        }))
    }));
    return {
        categories,
        favorites: {},
        stats: {},
        deletedSeedUrls: [],
        settings: {
            theme: 'light',
            viewMode: 'card',
            density: 'comfort',
            showFavicons: false,
            showRecent: true,
            searchHistory: []
        }
    };
}

function loadState() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return null;
        const s = JSON.parse(raw);
        if (!s || !Array.isArray(s.categories)) return null;
        // 补全 settings 默认值（def 中 showFavicons 默认 false，用户已有设置才覆盖默认）
        const def = seedState().settings;
        s.settings = Object.assign({}, def, s.settings || {});
        // 版本化迁移：每次新版本希望"网站图标再次默认关"时，提升版本号即可
        //   对"从没见过此版本迁移标记"的用户，强制执行一次关；之后用户手动切换的偏好被保留
        try {
            const FAV_MIG_KEY = 'bookmarks-favicon-mig-v2';
            if (!localStorage.getItem(FAV_MIG_KEY)) {
                s.settings.showFavicons = false;
                localStorage.setItem(FAV_MIG_KEY, '1');
            }
        } catch (e) {}
        // 收藏 / 访问统计 改为会话级（sessionStorage），不随 localStorage 持久化
        s.favorites = {};
        s.stats = {};
        s.deletedSeedUrls = Array.isArray(s.deletedSeedUrls) ? s.deletedSeedUrls : [];

        // 当前 RAW_DATA（script.js 默认种子）中存在的所有网址 url / 分类 id，用于判断"默认数据是否被删除 / 修改 / 新增"
        // 同时构建"按 URL 索引的 RAW_DATA 网站详情 Map"和"按分类 ID 索引的分类详情 Map"，用于后续字段同步（name/desc/title/icon 变更也要生效）
        const seedUrls = new Set();                 // 当前 RAW_DATA 中所有网址 URL（小写）
        const seedCatIds = new Set();               // 当前 RAW_DATA 中所有分类 ID
        const seedUrlToSite = new Map();            // url(lower) -> { name, desc, ... }  用于同步已有网址的 name/desc 字段
        const seedCatIdToCat = new Map();           // catId -> { title, icon, group }   用于同步已有分类的 title/icon/group 字段
        RAW_DATA.forEach(cat => {
            seedCatIds.add(cat.id);
            seedCatIdToCat.set(cat.id, {
                title: cat.title,
                icon: cat.icon,
                group: groupOf(cat.id)
            });
            (cat.websites || []).forEach(w => {
                if (w && w.url) {
                    const u = w.url.toLowerCase();
                    seedUrls.add(u);
                    seedUrlToSite.set(u, {
                        name: w.name,
                        desc: w.desc || ''
                    });
                }
            });
        });

        // ========== 1) 校验并规整每个分类 / 网址的结构，避免旧数据残缺导致渲染异常 ==========
        s.categories = s.categories.map(c => {
            const isCatSeed = c.seed === true ? true : (c.seed === false ? false : seedCatIds.has(c.id));
            // ---- 同步 seed 分类的字段（title / icon / group）：RAW_DATA 改了这些字段，页面上也要同步 ----
            if (isCatSeed && seedCatIdToCat.has(c.id)) {
                const defCat = seedCatIdToCat.get(c.id);
                c.title = defCat.title;
                c.icon = defCat.icon;
                c.group = defCat.group;
            }
            return {
                id: c.id,
                title: c.title || '未命名分类',
                icon: c.icon || 'fa-folder',
                group: c.group || '其他',
                seed: isCatSeed,
                websites: Array.isArray(c.websites)
                    ? c.websites.map(w => {
                        const url = w.url || '#';
                        const urlLower = url.toLowerCase();
                        // seed 标记优先用已保存值；旧数据按"url 是否在默认种子中"推导并随存档持久化
                        const isSeed = w.seed === true ? true : (w.seed === false ? false : seedUrls.has(urlLower));
                        // ---- 同步 seed 网址的字段（name / desc）：RAW_DATA 中改了名称/描述也要在页面上生效 ----
                        let name = w.name || '未命名';
                        let desc = w.desc || '';
                        if (isSeed && seedUrlToSite.has(urlLower)) {
                            const defSite = seedUrlToSite.get(urlLower);
                            name = defSite.name;
                            desc = defSite.desc;
                        }
                        return {
                            uid: w.uid || genUid(),
                            name,
                            url,
                            desc,
                            order: typeof w.order === 'number' ? w.order : 0,
                            fav: !!w.fav,
                            seed: isSeed
                        };
                    })
                    : []
            };
        });

        // ========== 2) 若用户从 RAW_DATA（script.js）删除了某个默认网址，存档里也要同步移除对应卡片 ==========
        s.categories.forEach(cat => {
            cat.websites = cat.websites.filter(w => !(w.seed && !seedUrls.has((w.url || '').toLowerCase())));
        });
        // 若整个默认分类已从 RAW_DATA 删除且已无网址，则连分类一并移除（避免残留空分类）
        s.categories = s.categories.filter(cat => !(cat.seed && !seedCatIds.has(cat.id) && cat.websites.length === 0));

        // ========== 3) 合并当前默认种子，保证默认卡片完整显示（不删除用户已有的任何数据） ==========
        //    3.1) 已存在的分类：按 url 补齐它缺失的默认网址（用户显式删除过的默认网址不补回）
        //    3.2) 用户存档完全没有的分类：整条补回
        const seed = seedState();
        const seedById = new Map(seed.categories.map(c => [c.id, c]));
        const deletedSet = new Set(s.deletedSeedUrls.map(u => (u || '').toLowerCase()));

        // 先构建"全部分类下已有 URL 集合"，避免补网址时与已有（包括其他分类下已存在的同 URL）重复
        const allHaveUrlsGlobal = new Set();
        s.categories.forEach(cat => {
            cat.websites.forEach(w => allHaveUrlsGlobal.add((w.url || '').toLowerCase()));
        });

        s.categories.forEach(cat => {
            const defCat = seedById.get(cat.id);
            if (!defCat) return;
            const haveUrls = new Set(cat.websites.map(w => (w.url || '').toLowerCase()));
            defCat.websites.forEach(dw => {
                const u = (dw.url || '').toLowerCase();
                // 补回条件：当前分类下没有 + 全局也没有（避免别的分类挪过来的重复）+ 用户没有在 UI 显式删除过
                if (!haveUrls.has(u) && !allHaveUrlsGlobal.has(u) && !deletedSet.has(u)) {
                    cat.websites.push(dw);
                    allHaveUrlsGlobal.add(u); // 标记为已存在，防止后续重复加
                }
            });
        });
        const haveIds = new Set(s.categories.map(c => c.id));
        seed.categories.forEach(defCat => {
            if (!haveIds.has(defCat.id)) s.categories.push(defCat);
        });

        // ========== 4) 清理 deletedSeedUrls 中"当前 RAW_DATA 已经不存在的 URL" ==========
        //    避免用户在 RAW_DATA 中先删 → 过段时间又加回来 时，因为旧的删除记录存在而无法重新显示
        s.deletedSeedUrls = s.deletedSeedUrls.filter(u => seedUrls.has((u || '').toLowerCase()));

        return s;
    } catch (e) {
        console.warn('读取本地数据失败，使用默认数据', e);
        return null;
    }
}

function saveState() {
    // 持久化部分（分类 / 设置）写入 localStorage
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({
            categories: state.categories,
            deletedSeedUrls: state.deletedSeedUrls || [],
            settings: state.settings
        }));
    } catch (e) {
        toast('保存失败：本地存储可能已满', 'error');
    }
    // 会话部分（收藏 / 访问统计）单独落 sessionStorage
    saveSession();
}

// 仅写入会话级数据（收藏 / 访问统计），无需重写全部卡片
function saveSession() {
    try {
        sessionStorage.setItem(SESSION_KEY, JSON.stringify({
            favorites: state.favorites,
            stats: state.stats
        }));
    } catch (e) {}
}

// 收藏 / 访问统计 仅存在于当前会话，关闭浏览器后自动清空（reload 不丢）
function loadSession() {
    try {
        const raw = sessionStorage.getItem(SESSION_KEY);
        if (raw) {
            const s = JSON.parse(raw);
            state.favorites = s.favorites || {};
            state.stats = s.stats || {};
        } else {
            state.favorites = {};
            state.stats = {};
        }
    } catch (e) {
        state.favorites = {};
        state.stats = {};
    }
    // 清理已不存在卡片的收藏 / 访问统计，确保"数据统计"随 script.js 增删网址而自动更新
    const liveUids = new Set(getAllSites().map(x => x.site.uid));
    Object.keys(state.favorites).forEach(uid => { if (!liveUids.has(uid)) delete state.favorites[uid]; });
    Object.keys(state.stats).forEach(uid => { if (!liveUids.has(uid)) delete state.stats[uid]; });
}

// ========================================================================
//  运行时变量
// ========================================================================
let currentGroup = '全部';
let currentCategory = 0;     // 0 表示全部
let searchQuery = '';
let showFavorites = false;
let pendingHighlight = null;
let draggedUid = null;
let editingUid = null;       // 编辑网址时的 uid
let editingCatId = null;     // 编辑分类时的 id
let contextTarget = null;    // 右键菜单目标 uid
let recentUids = [];         // 最近访问（仅当前浏览器会话，关闭浏览器自动清空）

// ========================================================================
//  DOM 引用
// ========================================================================
const navLevel1 = document.getElementById('navLevel1');
const subnavWrap = document.getElementById('subnavWrap');
const subnavInner = document.getElementById('subnavInner');
const container = document.getElementById('bookmarksContainer');
const searchInput = document.getElementById('searchInput');
const searchClear = document.getElementById('searchClear');
const searchHistoryEl = document.getElementById('searchHistory');
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const resultCount = document.getElementById('resultCount');
const toastContainer = document.getElementById('toastContainer');
const contextMenu = document.getElementById('contextMenu');
const settingsMenuEl = document.getElementById('settingsMenu');

// ========================================================================
//  数据辅助
// ========================================================================
function getCategoriesByGroup(group) {
    if (group === '全部') return state.categories;
    return state.categories.filter(c => c.group === group);
}

function getAllSites() {
    const list = [];
    state.categories.forEach(cat => cat.websites.forEach(s => list.push({ site: s, category: cat })));
    return list;
}

function findSite(uid) {
    for (const cat of state.categories) {
        const s = cat.websites.find(w => w.uid === uid);
        if (s) return { site: s, category: cat };
    }
    return null;
}

function isFavorite(uid) { return !!state.favorites[uid]; }

function getStat(uid) { return state.stats[uid] || null; }

// 最近访问：用 sessionStorage 存储，关闭浏览器即自动清空（reload 不丢）
function loadRecent() {
    try {
        const raw = sessionStorage.getItem(RECENT_KEY);
        const arr = raw ? JSON.parse(raw) : [];
        recentUids = Array.isArray(arr) ? arr.filter(u => typeof u === 'string') : [];
    } catch (e) { recentUids = []; }
}
function saveRecent() {
    try { sessionStorage.setItem(RECENT_KEY, JSON.stringify(recentUids.slice(0, RECENT_MAX))); } catch (e) {}
}

function recordVisit(uid) {
    if (!state.stats[uid]) state.stats[uid] = { visits: 0, last: 0 };
    state.stats[uid].visits = (state.stats[uid].visits || 0) + 1;
    state.stats[uid].last = Date.now();
    // 最近访问：只保留在当前浏览器会话内，关闭浏览器后自动清空
    const i = recentUids.indexOf(uid);
    if (i !== -1) recentUids.splice(i, 1);
    recentUids.unshift(uid);
    if (recentUids.length > RECENT_MAX) recentUids.length = RECENT_MAX;
    saveRecent();
    saveSession();
    renderRecentPanel();
}

function toggleFavorite(uid) {
    if (state.favorites[uid]) {
        delete state.favorites[uid];
        toast('已取消收藏');
    } else {
        state.favorites[uid] = true;
        toast('已加入收藏', 'success');
    }
    saveSession();
    const card = container.querySelector(`.bookmark-card[data-uid="${uid}"]`);
    if (card) {
        const btn = card.querySelector('.fav-btn');
        if (btn) {
            const fav = isFavorite(uid);
            btn.classList.toggle('active', fav);
            btn.innerHTML = fav ? ICONS.star : ICONS.starOff;
        }
    }
    if (showFavorites) renderCards();
}

function getHostname(url) {
    try { return new URL(url).hostname; } catch (e) { return ''; }
}

function normalizeUrl(url) {
    url = (url || '').trim();
    if (!url) return '';
    if (!/^https?:\/\//i.test(url)) url = 'https://' + url;
    return url;
}

function timeAgo(ts) {
    const diff = Date.now() - ts;
    const m = 60000, h = 3600000, d = 86400000;
    if (diff < m) return '刚刚';
    if (diff < h) return Math.floor(diff / m) + '分钟前';
    if (diff < d) return Math.floor(diff / h) + '小时前';
    if (diff < 7 * d) return Math.floor(diff / d) + '天前';
    return new Date(ts).toLocaleDateString();
}

// ========================================================================
//  渲染：一级菜单
// ========================================================================
function renderLevel1() {
    navLevel1.innerHTML = '';
    GROUP_NAMES.forEach(name => {
        const el = document.createElement('span');
        el.className = 'nav-item' + (name === currentGroup && !showFavorites ? ' active' : '');
        if (name === '全部') {
            el.textContent = `全部`;
        } else {
            el.textContent = name;
        }
        el.dataset.group = name;
        el.addEventListener('click', () => {
            currentGroup = name;
            const ids = getCategoriesByGroup(name).map(c => c.id);
            if (currentCategory !== 0 && !ids.includes(currentCategory)) currentCategory = 0;
            if (name === '全部') currentCategory = 0;
            showFavorites = false;
            searchQuery = ''; searchInput.value = '';
            pendingHighlight = null;
            renderAll();
        });
        navLevel1.appendChild(el);
    });
    if (showFavorites) {
        const el = document.createElement('span');
        el.className = 'nav-item fav-pill active';
        el.innerHTML = ICONS.star + ' 收藏';
        el.addEventListener('click', () => { showFavorites = false; renderAll(); });
        navLevel1.appendChild(el);
    }
}

// ========================================================================
//  渲染：二级菜单
// ========================================================================
function renderLevel2() {
    subnavInner.innerHTML = '';

    if (showFavorites || currentGroup === '全部') {
        subnavWrap.classList.remove('visible');
        return;
    }

    const categories = getCategoriesByGroup(currentGroup);
    subnavWrap.classList.add('visible');

    const allItem = document.createElement('span');
    allItem.className = 'sub-item' + (currentCategory === 0 ? ' active' : '');
    allItem.innerHTML = `全部`;
    allItem.addEventListener('click', () => { currentCategory = 0; pendingHighlight = null; renderAll(); });
    subnavInner.appendChild(allItem);

    categories.forEach(cat => {
        const item = document.createElement('span');
        item.className = 'sub-item' + (cat.id === currentCategory ? ' active' : '');
        item.textContent = cat.title;
        item.addEventListener('click', () => {
            currentCategory = cat.id; pendingHighlight = null; renderAll();
        });
        subnavInner.appendChild(item);
    });
}

// ========================================================================
//  可见网址列表（按筛选 / 搜索 / 收藏）
// ========================================================================
function getVisibleWebsites() {
    let list = [];
    if (showFavorites) {
        state.categories.forEach(cat => cat.websites.forEach(s => { if (isFavorite(s.uid)) list.push({ site: s, category: cat }); }));
    } else if (currentCategory !== 0) {
        const cat = state.categories.find(c => c.id === currentCategory);
        if (cat) cat.websites.forEach(s => list.push({ site: s, category: cat }));
    } else {
        getCategoriesByGroup(currentGroup).forEach(cat => cat.websites.forEach(s => list.push({ site: s, category: cat })));
    }

    const keyword = searchQuery.trim();
    if (keyword) {
        const q = keyword.toLowerCase();
        const qLen = q.length;

        // ============ 严格过滤：只有 name / desc / url / 分类标题 任一匹配才保留 ============
        //    （顺便预计算匹配级别得分，排序用）
        const SCORE = {
            NAME_EXACT: 900,          // 名称完全等于关键词
            NAME_PREFIX: 800,         // 名称前缀匹配（以关键词开头）
            NAME_INCLUDES: 700,       // 名称包含关键词
            DESC_EXACT: 500,          // 描述完全等于关键词
            DESC_PREFIX: 400,         // 描述前缀匹配
            DESC_INCLUDES: 300,       // 描述包含关键词
            CAT_TITLE_EXACT: 250,     // 分类标题完全等于
            CAT_TITLE_PREFIX: 220,    // 分类标题前缀
            CAT_TITLE_INCLUDES: 200,  // 分类标题包含
            URL_EXACT: 150,           // URL 完全等于
            URL_PREFIX: 120,          // URL 前缀
            URL_INCLUDES: 100         // URL 包含
        };

        const computeScore = ({ site, category }) => {
            const name = (site.name || '').toLowerCase();
            const desc = (site.desc || '').toLowerCase();
            const url = (site.url || '').toLowerCase();
            const catTitle = (category.title || '').toLowerCase();
            let best = 0;

            // ---- 名称（最高优先级字段） ----
            if (name) {
                if (name === q) best = Math.max(best, SCORE.NAME_EXACT);
                else if (name.startsWith(q)) best = Math.max(best, SCORE.NAME_PREFIX);
                else if (name.includes(q)) best = Math.max(best, SCORE.NAME_INCLUDES);
            }
            // ---- 描述 ----
            if (desc) {
                if (desc === q) best = Math.max(best, SCORE.DESC_EXACT);
                else if (desc.startsWith(q)) best = Math.max(best, SCORE.DESC_PREFIX);
                else if (desc.includes(q)) best = Math.max(best, SCORE.DESC_INCLUDES);
            }
            // ---- 分类标题（用户输入"医疗""标准"这种分类名时也能出结果） ----
            if (catTitle) {
                if (catTitle === q) best = Math.max(best, SCORE.CAT_TITLE_EXACT);
                else if (catTitle.startsWith(q)) best = Math.max(best, SCORE.CAT_TITLE_PREFIX);
                else if (catTitle.includes(q)) best = Math.max(best, SCORE.CAT_TITLE_INCLUDES);
            }
            // ---- URL（最低优先级字段） ----
            if (url) {
                if (url === q) best = Math.max(best, SCORE.URL_EXACT);
                else if (url.startsWith(q)) best = Math.max(best, SCORE.URL_PREFIX);
                else if (url.includes(q)) best = Math.max(best, SCORE.URL_INCLUDES);
            }
            return best;
        };

        // 先过滤：计算得分后得分为 0 即完全不相关，直接丢弃
        const scored = [];
        for (const item of list) {
            const s = computeScore(item);
            if (s > 0) scored.push({ ...item, _score: s });
        }

        // ============ 严格排序 ============
        //   1) 得分高的在前（完全 > 前缀 > 包含；字段优先级 name>desc>cat>url）
        //   2) 得分相同：名称更短的在前（更紧凑的命中通常更相关，例如搜"ISO"时 "ISO" 排在 "ISO官网" 前）
        //   3) 仍相同：按名称中文 localeCompare 稳定排序
        scored.sort((a, b) => {
            if (a._score !== b._score) return b._score - a._score;
            const aLen = (a.site.name || '').length;
            const bLen = (b.site.name || '').length;
            if (aLen !== bLen) return aLen - bLen;
            return (a.site.name || '').localeCompare(b.site.name || '', 'zh-CN');
        });

        return scored;
    }

    // 无关键词时：分类内按 order 排序；跨分类按 分组顺序→分类顺序→order 稳定展示
    return list;
}

// ========================================================================
//  渲染：卡片
// ========================================================================
function draggableOn() {
    return currentCategory !== 0 && !searchQuery.trim() && !showFavorites;
}

function renderCards() {
    container.innerHTML = '';
    const list = getVisibleWebsites();
    const total = list.length;

    // 结果计数
    let countText = `共 ${total} 个`;
    if (showFavorites) countText = `收藏 · 共 ${total} 个`;
    else if (searchQuery.trim()) countText = `搜索“${searchQuery.trim()}” · 共 ${total} 个`;
    else if (currentCategory !== 0) {
        const cat = state.categories.find(c => c.id === currentCategory);
        countText = `${cat ? cat.title : ''} · 共 ${total} 个`;
    } else if (currentGroup !== '全部') {
        countText = `${currentGroup} · 共 ${total} 个`;
    }
    resultCount.textContent = countText;

    if (total === 0) {
        const empty = document.createElement('div');
        empty.className = 'no-results';
        let msg, sub;
        if (searchQuery.trim()) { msg = '没有找到网址'; sub = `未找到与“${searchQuery.trim()}”相关的网址`; }
        else if (showFavorites) { msg = '还没有收藏'; sub = '点击卡片右上角的星标，把常用网站收藏起来'; }
        else { msg = '该分类暂无网址'; sub = '按 N 键快速新增一个网址'; }
        empty.innerHTML = `${ICONS.inbox}<h3>${msg}</h3><p>${sub}</p>`;
        container.appendChild(empty);
        return;
    }

    const groupByCat = (currentCategory === 0 && !searchQuery.trim() && !showFavorites);
    const frag = document.createDocumentFragment();

    if (groupByCat) {
        const grouped = {};
        list.forEach(({ site, category }) => {
            if (!grouped[category.title]) grouped[category.title] = { category, items: [] };
            grouped[category.title].items.push({ site, category });
        });
        for (const [title, grp] of Object.entries(grouped)) {
            const h2 = document.createElement('h2');
            h2.className = 'category-title';
            h2.innerHTML = `<span>${title} <span class="cat-count">(${grp.items.length})</span></span>`;
            frag.appendChild(h2);
            const grid = document.createElement('div');
            grid.className = 'bookmarks-grid';
            // 卡片先用 DocumentFragment 批处理，减少 grid 插入次数
            const gridFrag = document.createDocumentFragment();
            grp.items.forEach(({ site, category }) => gridFrag.appendChild(createCard(site, category)));
            grid.appendChild(gridFrag);
            frag.appendChild(grid);
        }
    } else {
        const grid = document.createElement('div');
        grid.className = 'bookmarks-grid';
        const gridFrag = document.createDocumentFragment();
        list.forEach(({ site, category }) => gridFrag.appendChild(createCard(site, category)));
        grid.appendChild(gridFrag);
        frag.appendChild(grid);
    }
    // 所有 DOM 节点一次性插入（1 次 reflow，代替之前每个卡片 1 次）
    container.appendChild(frag);

    // 处理待高亮
    if (pendingHighlight) {
        const target = pendingHighlight;
        pendingHighlight = null;
        requestAnimationFrame(() => setTimeout(() => {
            const cards = container.querySelectorAll('.bookmark-card');
            for (const card of cards) {
                const t = card.querySelector('.bookmark-title');
                if (t && t.textContent === target.cardName) {
                    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    card.classList.add('highlight');
                    setTimeout(() => card.classList.remove('highlight'), 3000);
                    break;
                }
            }
        }, 100));
    }
}

// 安全的高亮（防 XSS）
function setHighlighted(el, text, query) {
    el.textContent = '';
    if (!query) { el.textContent = text; return; }
    const lower = text.toLowerCase();
    const q = query.toLowerCase();
    let i = 0;
    while (i <= text.length) {
        const idx = lower.indexOf(q, i);
        if (idx === -1) { el.appendChild(document.createTextNode(text.slice(i))); break; }
        if (idx > i) el.appendChild(document.createTextNode(text.slice(i, idx)));
        const mark = document.createElement('mark');
        mark.textContent = text.slice(idx, idx + q.length);
        el.appendChild(mark);
        i = idx + q.length;
    }
}

function createCard(site, category) {
    const a = document.createElement('a');
    a.className = 'bookmark-card';
    a.href = site.url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.dataset.uid = site.uid;
    a.dataset.url = site.url;
    a.dataset.catTitle = category.title;
    a.dataset.siteName = site.name;
    if (draggableOn()) a.draggable = true;

    // 头像 / favicon（默认显示一个清晰的"蓝底白地球"图标作为兜底，加载到真实图标时覆盖它）
    const avatar = document.createElement('div');
    avatar.className = 'card-avatar';
    const NS = 'http://www.w3.org/2000/svg';
    const defSvg = document.createElementNS(NS, 'svg');
    defSvg.setAttribute('viewBox', '0 0 64 64');
    defSvg.setAttribute('class', 'avatar-globe');
    defSvg.setAttribute('aria-hidden', 'true');
    defSvg.innerHTML = `
      <defs>
        <linearGradient id="avGlobe" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#5BC0F8"/>
          <stop offset="1" stop-color="#1E88E5"/>
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="14" fill="url(#avGlobe)"/>
      <g fill="none" stroke="#ffffff" stroke-width="2.6" stroke-linecap="round" transform="translate(32 32)">
        <circle r="16"/>
        <ellipse cx="0" cy="0" rx="7" ry="16"/>
        <line x1="-16" y1="0" x2="16" y2="0"/>
        <path d="M-15 -8 Q 0 -10 15 -8"/>
        <path d="M-15 8 Q 0 10 15 8"/>
      </g>`;
    avatar.appendChild(defSvg);
    if (state.settings.showFavicons) {
        const host = getHostname(site.url);
        if (host) {
            const img = document.createElement('img');
            img.alt = '';
            img.loading = 'lazy';
            img.decoding = 'async';
            img.src = 'https://www.google.com/s2/favicons?domain=' + encodeURIComponent(host) + '&sz=128';
            img.onerror = () => { img.style.display = 'none'; };
            avatar.appendChild(img);
        }
    }

    const main = document.createElement('div');
    main.className = 'card-main';
    const title = document.createElement('div');
    title.className = 'bookmark-title';
    setHighlighted(title, site.name || '', searchQuery.trim());
    const desc = document.createElement('div');
    desc.className = 'bookmark-desc';
    setHighlighted(desc, site.desc || '', searchQuery.trim());
    main.appendChild(title);
    main.appendChild(desc);

    const fav = document.createElement('button');
    fav.type = 'button';
    fav.className = 'fav-btn' + (isFavorite(site.uid) ? ' active' : '');
    fav.innerHTML = isFavorite(site.uid) ? ICONS.star : ICONS.starOff;
    fav.title = '收藏 / 取消收藏';
    // 事件委托到 container（见 bindEvents 中的 delegateCardActions），这里不再单独绑 listener

    const top = document.createElement('div');
    top.className = 'card-top';
    top.appendChild(avatar);
    top.appendChild(main);
    top.appendChild(fav);

    // 底部
    const footer = document.createElement('div');
    footer.className = 'bookmark-footer';
    const catSpan = document.createElement('span');
    catSpan.className = 'bookmark-category';
    catSpan.textContent = category.title;

    const actions = document.createElement('div');
    actions.className = 'card-actions';

    const copyBtn = document.createElement('button');
    copyBtn.type = 'button';
    copyBtn.className = 'mini-btn';
    copyBtn.innerHTML = ICONS.copy;
    copyBtn.title = '复制链接';
    // 事件委托到 container，不再单独绑 listener

    const locateBtn = document.createElement('button');
    locateBtn.type = 'button';
    locateBtn.className = 'mini-btn locate';
    locateBtn.innerHTML = ICONS.locate;
    locateBtn.title = '定位到该分类';
    // 事件委托到 container，不再单独绑 listener

    actions.appendChild(copyBtn);
    actions.appendChild(locateBtn);
    footer.appendChild(catSpan);
    footer.appendChild(actions);

    a.appendChild(top);
    a.appendChild(footer);

    // 记录访问：由 container 的 click 委托执行，避免 N 个 listener
    // 右键菜单（需要获取坐标，保留在此）
    a.addEventListener('contextmenu', (e) => { e.preventDefault(); showContextMenu(e, site.uid); });

    if (draggableOn()) {
        a.addEventListener('dragstart', (e) => { draggedUid = site.uid; a.classList.add('dragging'); e.dataTransfer.effectAllowed = 'move'; });
        a.addEventListener('dragend', () => { draggedUid = null; a.classList.remove('dragging'); document.querySelectorAll('.drag-over').forEach(x => x.classList.remove('drag-over')); });
        a.addEventListener('dragover', (e) => { e.preventDefault(); a.classList.add('drag-over'); });
        a.addEventListener('dragleave', () => a.classList.remove('drag-over'));
        a.addEventListener('drop', (e) => {
            e.preventDefault(); a.classList.remove('drag-over');
            if (draggedUid && draggedUid !== site.uid) dropReorder(draggedUid, site.uid);
        });
    }
    return a;
}

// ========================================================================
//  拖拽排序（单分类内）
// ========================================================================
function dropReorder(draggedUid, targetUid) {
    const cat = state.categories.find(c => c.id === currentCategory);
    if (!cat) return;
    const from = cat.websites.findIndex(s => s.uid === draggedUid);
    const to = cat.websites.findIndex(s => s.uid === targetUid);
    if (from === -1 || to === -1) return;
    const [moved] = cat.websites.splice(from, 1);
    cat.websites.splice(to, 0, moved);
    cat.websites.forEach((s, i) => s.order = i);
    saveState();
    renderCards();
}

// ========================================================================
//  定位卡片
// ========================================================================
function locateCard(categoryTitle, cardName) {
    if (!categoryTitle) return;
    const cat = state.categories.find(c => c.title === categoryTitle);
    if (!cat) return;

    if (currentCategory === cat.id && !searchQuery.trim() && !showFavorites) {
        const cards = container.querySelectorAll('.bookmark-card');
        for (const card of cards) {
            const t = card.querySelector('.bookmark-title');
            if (t && t.textContent === cardName) {
                cards.forEach(c => c.classList.remove('highlight'));
                card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                card.classList.add('highlight');
                setTimeout(() => card.classList.remove('highlight'), 3000);
                return;
            }
        }
    }

    currentGroup = cat.group;
    currentCategory = cat.id;
    showFavorites = false;
    searchQuery = ''; searchInput.value = '';
    pendingHighlight = { cardName };
    renderAll();
}

// ========================================================================
//  性能调度：rAF 去抖（同一动画帧内多次渲染请求合并为 1 次，体感"反应快"）
// ========================================================================
let _rAFId = 0;
const _rAFQueue = new Map(); // key(String) → fn
function sched(key, fn) {
    _rAFQueue.set(key, fn);
    if (_rAFId) return;
    _rAFId = requestAnimationFrame(() => {
        _rAFId = 0;
        const tasks = Array.from(_rAFQueue.values());
        _rAFQueue.clear();
        tasks.forEach(t => { try { t(); } catch (e) {} });
    });
}

// ========================================================================
//  全部渲染
// ========================================================================
function renderAll() {
    applySettings();
    renderLevel1();
    renderLevel2();
    renderRecentPanel();
    renderCards();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
// 轻量渲染：仅卡片区 + 结果计数（搜索、视图切换、收藏切换等高频场景优先用此函数，少 ~60% DOM 操作）
function renderCardsOnly() {
    renderCards();
}

// ========================================================================
//  最近访问条
// ========================================================================
function renderRecentPanel() {
    const byUid = new Map(getAllSites().map(x => [x.site.uid, x]));
    const items = recentUids.map(u => byUid.get(u)).filter(Boolean).slice(0, 20);
    const panel = document.getElementById('recentPanelItems');
    panel.innerHTML = '';
    if (items.length === 0) {
        panel.innerHTML = '<div class="recent-empty">暂无最近访问记录</div>';
        return;
    }
    items.forEach(({ site }) => {
        const chip = document.createElement('a');
        chip.className = 'recent-chip';
        chip.href = site.url;
        chip.target = '_blank';
        chip.title = site.name + '\n' + site.url;
        chip.addEventListener('click', () => {
            recordVisit(site.uid);
            document.getElementById('recentPanel').classList.remove('open');
        });
        const host = getHostname(site.url);
        if (state.settings.showFavicons && host) {
            const img = document.createElement('img');
            img.alt = ''; img.loading = 'lazy';
            img.src = 'https://www.google.com/s2/favicons?domain=' + encodeURIComponent(host) + '&sz=32';
            img.onerror = () => img.remove();
            chip.appendChild(img);
        }
        const span = document.createElement('span');
        span.textContent = site.name;
        chip.appendChild(span);
        panel.appendChild(chip);
    });
}

// ========================================================================
//  设置应用
// ========================================================================
function applySettings() {
    const s = state.settings;
    document.body.classList.toggle('view-list', s.viewMode === 'list');
    document.body.classList.toggle('density-compact', s.density === 'compact');
    document.body.classList.toggle('no-favicons', !s.showFavicons);
    document.body.classList.toggle('dark-mode', s.theme === 'dark');

    themeIcon.innerHTML = s.theme === 'dark'
        ? '<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"></circle><line x1="12" y1="2" x2="12" y2="5"></line><line x1="12" y1="19" x2="12" y2="22"></line><line x1="2" y1="12" x2="5" y2="12"></line><line x1="19" y1="12" x2="22" y2="12"></line><line x1="4.5" y1="4.5" x2="6.5" y2="6.5"></line><line x1="17.5" y1="17.5" x2="19.5" y2="19.5"></line><line x1="4.5" y1="19.5" x2="6.5" y2="17.5"></line><line x1="17.5" y1="6.5" x2="19.5" y2="4.5"></line></svg>'
        : '<svg class="icon-svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>';
    document.getElementById('viewIcon').innerHTML = s.viewMode === 'list'
        ? '<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="7" height="7" rx="1"></rect><rect x="14" y="3" width="7" height="7" rx="1"></rect><rect x="3" y="14" width="7" height="7" rx="1"></rect><rect x="14" y="14" width="7" height="7" rx="1"></rect></svg>'
        : '<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><line x1="8" y1="6" x2="20" y2="6"></line><line x1="8" y1="12" x2="20" y2="12"></line><line x1="8" y1="18" x2="20" y2="18"></line><line x1="3.5" y1="6" x2="3.5" y2="6"></line><line x1="3.5" y1="12" x2="3.5" y2="12"></line><line x1="3.5" y1="18" x2="3.5" y2="18"></line></svg>';

    updateSettingsMenu();
}

function updateSettingsMenu() {
    const s = state.settings;
    const d = settingsMenuEl.querySelector('[data-action="density"]');
    const f = settingsMenuEl.querySelector('[data-action="favicon"]');
    const ff = settingsMenuEl.querySelector('[data-action="favfilter"]');
    if (d) {
        d.classList.toggle('active', s.density === 'compact');
        d.querySelector('span').textContent = s.density === 'compact' ? '密度：紧凑' : '密度：舒适';
    }
    if (f) {
        f.classList.toggle('active', s.showFavicons);
        f.querySelector('span').textContent = s.showFavicons ? '网站图标：开' : '网站图标：关';
    }
    if (ff) {
        ff.classList.toggle('active', showFavorites);
        ff.querySelector('span').textContent = showFavorites ? '退出仅看收藏' : '仅看收藏';
    }
}

function toggleTheme() {
    state.settings.theme = state.settings.theme === 'dark' ? 'light' : 'dark';
    saveState(); applySettings();
}
function toggleView() {
    state.settings.viewMode = state.settings.viewMode === 'card' ? 'list' : 'card';
    saveState(); applySettings(); renderCards();
}
function toggleDensity() {
    state.settings.density = state.settings.density === 'comfort' ? 'compact' : 'comfort';
    saveState(); applySettings();
}
function toggleFavicons() {
    state.settings.showFavicons = !state.settings.showFavicons;
    saveState(); applySettings(); renderAll();
}
function toggleFavFilter() {
    showFavorites = !showFavorites;
    searchQuery = ''; searchInput.value = '';
    saveState(); renderAll();
}

// ========================================================================
//  复制链接
// ========================================================================
function copyUrl(url) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url).then(() => toast('链接已复制', 'success'))
            .catch(() => fallbackCopy(url));
    } else fallbackCopy(url);
}
function fallbackCopy(text) {
    const ta = document.createElement('textarea');
    ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
    document.body.appendChild(ta); ta.select();
    try { document.execCommand('copy'); toast('链接已复制', 'success'); }
    catch (e) { toast('复制失败', 'error'); }
    document.body.removeChild(ta);
}

// ========================================================================
//  一键打开全部可见网址
// ========================================================================
function openAllVisible() {
    const list = getVisibleWebsites();
    if (list.length === 0) return;
    if (list.length > 15 && !confirm(`将打开 ${list.length} 个网址，确定继续？`)) return;
    toast(`正在打开 ${list.length} 个网址`, 'info');
    list.forEach(({ site }, i) => {
        setTimeout(() => { recordVisit(site.uid); window.open(site.url, '_blank', 'noopener'); }, i * 120);
    });
}

// ========================================================================
//  弹窗通用
// ========================================================================
function openModal(id) {
    document.getElementById(id).style.display = 'flex';
    document.body.classList.add('modal-open');
}
function closeModal(id) {
    document.getElementById(id).style.display = 'none';
    if (!document.querySelector('.modal-overlay[style*="flex"]')) document.body.classList.remove('modal-open');
}
function closeAllModals() {
    document.querySelectorAll('.modal-overlay').forEach(m => m.style.display = 'none');
    document.body.classList.remove('modal-open');
}
function anyModalOpen() {
    return !!document.querySelector('.modal-overlay[style*="flex"]');
}

// ========================================================================
//  网址 新增 / 编辑
// ========================================================================
function populateGroupSelect(sel, selected) {
    sel.innerHTML = '';
    GROUP_NAMES.filter(g => g !== '全部').forEach(g => {
        const o = document.createElement('option'); o.value = g; o.textContent = g; sel.appendChild(o);
    });
    if (selected) sel.value = selected;
}
function populateCategorySelect(group, selectedCatId) {
    const sel = document.getElementById('fCategory');
    sel.innerHTML = '';
    getCategoriesByGroup(group).forEach(c => {
        const o = document.createElement('option'); o.value = c.id; o.textContent = c.title; sel.appendChild(o);
    });
    if (selectedCatId != null) sel.value = selectedCatId;
}

function openAddSiteModal() {
    editingUid = null;
    document.getElementById('siteModalTitle').textContent = '添加网址';
    document.getElementById('fName').value = '';
    document.getElementById('fUrl').value = '';
    document.getElementById('fDesc').value = '';
    document.getElementById('urlHint').textContent = '';
    const fNewCat = document.getElementById('fNewCat');
    fNewCat.checked = false;
    document.getElementById('fNewCatName').style.display = 'none';
    document.getElementById('fNewCatIcon').style.display = 'none';
    document.getElementById('fCategory').style.display = 'block';
    const grp = (currentCategory !== 0) ? (state.categories.find(c => c.id === currentCategory)?.group || '其他') : (currentGroup !== '全部' ? currentGroup : '其他');
    populateGroupSelect(document.getElementById('fGroup'), grp);
    populateCategorySelect(grp, currentCategory !== 0 ? currentCategory : undefined);
    openModal('siteModal');
    setTimeout(() => document.getElementById('fName').focus(), 50);
}

function openEditSiteModal(uid) {
    const found = findSite(uid);
    if (!found) return;
    editingUid = uid;
    const { site, category } = found;
    document.getElementById('siteModalTitle').textContent = '编辑网址';
    document.getElementById('fName').value = site.name;
    document.getElementById('fUrl').value = site.url;
    document.getElementById('fDesc').value = site.desc || '';
    document.getElementById('urlHint').textContent = '';
    const fNewCat = document.getElementById('fNewCat');
    fNewCat.checked = false;
    document.getElementById('fNewCatName').style.display = 'none';
    document.getElementById('fNewCatIcon').style.display = 'none';
    document.getElementById('fCategory').style.display = 'block';
    populateGroupSelect(document.getElementById('fGroup'), category.group);
    populateCategorySelect(category.group, category.id);
    openModal('siteModal');
}

function saveSite() {
    const name = document.getElementById('fName').value.trim();
    let url = normalizeUrl(document.getElementById('fUrl').value.trim());
    const desc = document.getElementById('fDesc').value.trim();
    const urlHint = document.getElementById('urlHint');
    urlHint.textContent = '';

    if (!name) { toast('请填写名称', 'error'); return; }
    if (!url) { toast('请填写网址', 'error'); return; }

    // 重复检测
    const dup = getAllSites().find(({ site }) => site.url.toLowerCase() === url.toLowerCase() && site.uid !== editingUid);
    if (dup) { urlHint.textContent = '⚠ 该网址已存在（' + dup.site.name + '）'; toast('该网址已存在', 'error'); return; }

    const fNewCat = document.getElementById('fNewCat');
    let catId;
    if (fNewCat.checked) {
        const ncName = document.getElementById('fNewCatName').value.trim() || (name + '的分类');
        const nc = { id: genCatId(), title: ncName, icon: document.getElementById('fNewCatIcon').value, group: document.getElementById('fGroup').value, websites: [] };
        state.categories.push(nc); catId = nc.id;
    } else {
        catId = parseInt(document.getElementById('fCategory').value, 10);
    }

    const site = { uid: editingUid || genUid(), name, url, desc, order: 0, seed: false };

    if (editingUid) {
        const found = findSite(editingUid);
        found.category.websites = found.category.websites.filter(s => s.uid !== editingUid);
        const target = state.categories.find(c => c.id === catId);
        site.order = target.websites.length;
        target.websites.push(site);
    } else {
        const target = state.categories.find(c => c.id === catId);
        site.order = target.websites.length;
        target.websites.push(site);
    }

    saveState();
    closeModal('siteModal');
    renderAll();
    toast(editingUid ? '已更新' : '已添加', 'success');
    editingUid = null;
}

function deleteSite(uid) {
    const found = findSite(uid);
    if (!found) return;
    if (!confirm(`确定删除「${found.site.name}」？`)) return;
    found.category.websites = found.category.websites.filter(s => s.uid !== uid);
    delete state.favorites[uid];
    delete state.stats[uid];
    // 若是默认网址，记录删除，避免下次加载被种子数据补回
    if (found.site.seed && found.site.url) {
        if (!Array.isArray(state.deletedSeedUrls)) state.deletedSeedUrls = [];
        const u = found.site.url.toLowerCase();
        if (!state.deletedSeedUrls.includes(u)) state.deletedSeedUrls.push(u);
    }
    saveState();
    renderAll();
    toast('已删除', 'success');
}

// ========================================================================
//  分类 新增 / 编辑 / 删除
// ========================================================================
function openAddCatModal() {
    editingCatId = null;
    document.getElementById('catModalTitle').textContent = '添加分类';
    document.getElementById('cName').value = '';
    populateGroupSelect(document.getElementById('cGroup'),
        currentGroup !== '全部' ? currentGroup : '其他');
    openModal('catModal');
    setTimeout(() => document.getElementById('cName').focus(), 50);
}

function openEditCatModal(catId) {
    const cat = state.categories.find(c => c.id === catId);
    if (!cat) return;
    editingCatId = catId;
    document.getElementById('catModalTitle').textContent = '编辑分类';
    document.getElementById('cName').value = cat.title;
    populateGroupSelect(document.getElementById('cGroup'), cat.group);
    document.getElementById('cIcon').value = cat.icon;
    openModal('catModal');
}

function saveCategory() {
    const name = document.getElementById('cName').value.trim();
    const group = document.getElementById('cGroup').value;
    const icon = document.getElementById('cIcon').value;
    if (!name) { toast('请填写分类名称', 'error'); return; }

    if (editingCatId) {
        const cat = state.categories.find(c => c.id === editingCatId);
        cat.title = name; cat.group = group; cat.icon = icon;
        toast('已更新分类', 'success');
    } else {
        state.categories.push({ id: genCatId(), title: name, icon, group, websites: [] });
        toast('已添加分类', 'success');
    }
    saveState();
    closeModal('catModal');
    editingCatId = null;
    renderAll();
}

function deleteCategory(catId) {
    const cat = state.categories.find(c => c.id === catId);
    if (!cat) return;
    if (cat.websites.length && !confirm(`分类「${cat.title}」包含 ${cat.websites.length} 个网址，删除后这些网址也会一并删除。确定？`)) return;
    if (cat.websites.length === 0 && !confirm(`确定删除分类「${cat.title}」？`)) return;
    cat.websites.forEach(s => { delete state.favorites[s.uid]; delete state.stats[s.uid]; });
    state.categories = state.categories.filter(c => c.id !== catId);
    if (currentCategory === catId) currentCategory = 0;
    saveState();
    renderAll();
    toast('已删除分类', 'success');
}

// ========================================================================
//  统计面板
// ========================================================================
function openStats() {
    const all = getAllSites();
    const totalSites = all.length;
    const totalCats = state.categories.length;
    const favCount = Object.keys(state.favorites).length;
    const visitedCount = all.filter(({ site }) => getStat(site.uid)?.visits).length;

    const top = all.map(({ site, category }) => ({ site, category, st: getStat(site.uid) }))
        .filter(x => x.st && x.st.visits)
        .sort((a, b) => b.st.visits - a.st.visits)
        .slice(0, 8);

    const byGroup = GROUP_NAMES.filter(g => g !== '全部').map(g => ({
        g, n: getCategoriesByGroup(g).reduce((s, c) => s + c.websites.length, 0)
    })).filter(x => x.n > 0);

    const maxGroup = Math.max(1, ...byGroup.map(x => x.n));

    let html = `
        <div class="stat-cards">
            <div class="stat-card"><div class="stat-num">${totalSites}</div><div class="stat-lbl">网址总数</div></div>
            <div class="stat-card"><div class="stat-num">${totalCats}</div><div class="stat-lbl">分类数</div></div>
            <div class="stat-card"><div class="stat-num">${favCount}</div><div class="stat-lbl">收藏数</div></div>
            <div class="stat-card"><div class="stat-num">${visitedCount}</div><div class="stat-lbl">已访问网址</div></div>
        </div>
        <h4 class="stat-h">各分组网址分布</h4>
        <div class="stat-bars">
            ${byGroup.map(x => `
                <div class="stat-bar-row">
                    <span class="stat-bar-lbl">${x.g}</span>
                    <div class="stat-bar-track"><div class="stat-bar-fill" style="width:${(x.n / maxGroup * 100).toFixed(1)}%"></div></div>
                    <span class="stat-bar-val">${x.n}</span>
                </div>`).join('')}
        </div>
        <h4 class="stat-h">访问排行榜</h4>
        ${top.length ? `<ul class="stat-rank">
            ${top.map((x, i) => `
                <li><span class="rank-no">${i + 1}</span>
                <span class="rank-name">${escapeHtml(x.site.name)}</span>
                <span class="rank-cat">${escapeHtml(x.category.title)}</span>
                <span class="rank-visits">${x.st.visits} 次</span></li>`).join('')}
        </ul>` : '<p class="stat-empty">还没有访问记录，去逛逛吧～</p>'}
    `;
    document.getElementById('statsBody').innerHTML = html;
    openModal('statsModal');
}

function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

// ========================================================================
//  导入 / 导出 / 重置
// ========================================================================
function exportData() {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    const ts = new Date().toISOString().slice(0, 10);
    a.href = url; a.download = `网址库备份_${ts}.json`;
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast('已导出备份', 'success');
}

function importData(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const data = JSON.parse(e.target.result);
            if (!data || !Array.isArray(data.categories)) throw new Error('格式不正确');
            // 补全字段
            data.favorites = data.favorites || {};
            data.stats = data.stats || {};
            data.settings = Object.assign(seedState().settings, data.settings || {});
            state = data;
            saveState();
            currentGroup = '全部'; currentCategory = 0; searchQuery = ''; showFavorites = false;
            searchInput.value = '';
            renderAll();
            toast('导入成功', 'success');
        } catch (err) {
            toast('导入失败：' + err.message, 'error');
        }
    };
    reader.readAsText(file);
}

function resetData() {
    if (!confirm('确定恢复为默认数据？当前所有改动（新增/编辑/收藏/访问记录）将被清空。')) return;
    state = seedState();
    saveState();
    currentGroup = '全部'; currentCategory = 0; searchQuery = ''; showFavorites = false;
    searchInput.value = '';
    renderAll();
    toast('已恢复默认数据', 'success');
}

// ========================================================================
//  右键菜单
// ========================================================================
function showContextMenu(e, uid) {
    contextTarget = uid;
    contextMenu.style.display = 'block';
    const x = Math.min(e.clientX, window.innerWidth - 180);
    const y = Math.min(e.clientY, window.innerHeight - 200);
    contextMenu.style.left = x + 'px';
    contextMenu.style.top = y + 'px';
}
function hideContextMenu() { contextMenu.style.display = 'none'; contextTarget = null; }

contextMenu.addEventListener('click', (e) => {
    const action = e.target.closest('button')?.dataset.action;
    if (!action || !contextTarget) return;
    const uid = contextTarget;
    const found = findSite(uid);
    if (!found) { hideContextMenu(); return; }
    if (action === 'open') { recordVisit(uid); window.open(found.site.url, '_blank', 'noopener'); }
    else if (action === 'copy') copyUrl(found.site.url);
    else if (action === 'fav') toggleFavorite(uid);
    else if (action === 'edit') openEditSiteModal(uid);
    else if (action === 'delete') deleteSite(uid);
    hideContextMenu();
});

// ========================================================================
//  搜索历史
// ========================================================================
function addSearchHistory(q) {
    q = q.trim(); if (!q) return;
    const h = state.settings.searchHistory || [];
    const next = [q, ...h.filter(x => x !== q)].slice(0, 8);
    state.settings.searchHistory = next;
    saveState();
}
function renderSearchHistory() {
    const h = state.settings.searchHistory || [];
    if (!h.length || searchInput.value.trim()) { searchHistoryEl.style.display = 'none'; return; }
    searchHistoryEl.innerHTML = '';
    h.forEach(q => {
        const item = document.createElement('div');
        item.className = 'sh-item';
        item.innerHTML = `${ICONS.history}<span>${escapeHtml(q)}</span><span class="sh-del" title="删除">${ICONS.times}</span>`;
        item.addEventListener('click', (e) => {
            if (e.target.classList.contains('sh-del')) {
                state.settings.searchHistory = h.filter(x => x !== q); saveState(); renderSearchHistory(); return;
            }
            searchInput.value = q; searchQuery = q; searchHistoryEl.style.display = 'none'; renderAll();
        });
        searchHistoryEl.appendChild(item);
    });
    searchHistoryEl.style.display = 'block';
}

// ========================================================================
//  Toast
// ========================================================================
function toast(msg, type = 'info') {
    const el = document.createElement('div');
    el.className = 'toast toast-' + type;
    const ic = type === 'success' ? ICONS.check : type === 'error' ? ICONS.warn : ICONS.info;
    el.innerHTML = `${ic}<span>${escapeHtml(msg)}</span>`;
    toastContainer.appendChild(el);
    requestAnimationFrame(() => el.classList.add('show'));
    setTimeout(() => { el.classList.remove('show'); setTimeout(() => el.remove(), 300); }, 2400);
}

// ========================================================================
//  事件绑定
// ========================================================================
function bindEvents() {
    themeToggle.addEventListener('click', toggleTheme);
    document.getElementById('statsBtn').addEventListener('click', openStats);
    document.getElementById('viewBtn').addEventListener('click', toggleView);

    // 设置下拉：显示密度 / 网站图标 / 快捷键
    const settingsBtn = document.getElementById('settingsBtn');
    settingsBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        updateSettingsMenu();
        settingsMenuEl.classList.toggle('open');
    });
    settingsMenuEl.addEventListener('click', (e) => {
        const action = e.target.closest('button')?.dataset.action;
        if (!action) return;
        settingsMenuEl.classList.remove('open');
        if (action === 'density') toggleDensity();
        else if (action === 'favicon') toggleFavicons();
        else if (action === 'favfilter') toggleFavFilter();
        else if (action === 'shortcut') openModal('helpModal');
    });

    // 最近访问（按钮 + 下拉面板）
    const recentBtn = document.getElementById('recentBtn');
    const recentPanel = document.getElementById('recentPanel');
    recentBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        renderRecentPanel();
        recentPanel.classList.toggle('open');
    });

    // 搜索（使用 rAF 节流 + renderCardsOnly 轻量渲染，避免搜索时连续重绘整个页面）
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        searchClear.style.display = searchQuery ? 'flex' : 'none';
        searchHistoryEl.style.display = 'none';
        pendingHighlight = null;
        sched('cards', renderCardsOnly);
    });
    searchInput.addEventListener('focus', renderSearchHistory);
    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') { addSearchHistory(searchInput.value); searchHistoryEl.style.display = 'none'; }
    });
    searchClear.addEventListener('click', () => {
        searchInput.value = ''; searchQuery = '';
        searchClear.style.display = 'none';
        sched('cards', renderCardsOnly);
        searchInput.focus();
    });

    // ---------------------------------------------------------------
    // 卡片交互：事件委托（1 个 listener 处理所有卡片的收藏/复制/定位/访问记录）
    // 每个卡片减少 4 个 listener，对 1000+ 卡片规模节省大量内存 + 注册时间
    // ---------------------------------------------------------------
    container.addEventListener('click', (e) => {
        const card = e.target.closest('.bookmark-card');
        if (!card) return;
        const uid = card.dataset.uid;
        const url = card.dataset.url;
        const catTitle = card.dataset.catTitle;
        const siteName = card.dataset.siteName;
        if (!uid) return;

        // 1) 收藏按钮
        const favBtn = e.target.closest('.fav-btn');
        if (favBtn) {
            e.preventDefault();
            e.stopPropagation();
            toggleFavorite(uid);
            return;
        }
        // 2) 定位按钮（locate mini-btn）
        const locateBtn = e.target.closest('.mini-btn.locate');
        if (locateBtn) {
            e.preventDefault();
            e.stopPropagation();
            if (catTitle && siteName) locateCard(catTitle, siteName);
            return;
        }
        // 3) 复制按钮（非 locate 的 mini-btn）
        const copyBtn = e.target.closest('.mini-btn');
        if (copyBtn) {
            e.preventDefault();
            e.stopPropagation();
            copyUrl(url);
            return;
        }
        // 4) 点击卡片其它区域（正常跳转前记录访问）
        recordVisit(uid);
    });

    // 弹窗关闭
    document.querySelectorAll('[data-close]').forEach(b => b.addEventListener('click', () => closeModal(b.dataset.close)));
    document.querySelectorAll('.modal-overlay').forEach(o => o.addEventListener('click', (e) => {
        if (e.target === o) closeModal(o.id);
    }));
    document.getElementById('siteSaveBtn').addEventListener('click', saveSite);
    document.getElementById('catSaveBtn').addEventListener('click', saveCategory);

    // 新建分类勾选联动
    document.getElementById('fNewCat').addEventListener('change', (e) => {
        const show = e.target.checked;
        document.getElementById('fNewCatName').style.display = show ? 'block' : 'none';
        document.getElementById('fNewCatIcon').style.display = show ? 'block' : 'none';
        document.getElementById('fCategory').style.display = show ? 'none' : 'block';
    });
    document.getElementById('fGroup').addEventListener('change', (e) => populateCategorySelect(e.target.value));

    // 全局点击：关闭下拉 / 右键菜单
    document.addEventListener('click', (e) => {
        if (!e.target.closest('#recentDropdown')) document.getElementById('recentPanel').classList.remove('open');
        if (!e.target.closest('#settingsDropdown')) settingsMenuEl.classList.remove('open');
        hideContextMenu();
    });
    document.addEventListener('scroll', hideContextMenu, true);

    // 键盘快捷键
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (anyModalOpen()) closeAllModals();
            else if (searchQuery) { searchInput.value = ''; searchQuery = ''; searchClear.style.display = 'none'; sched('cards', renderCardsOnly); }
            hideContextMenu();
            return;
        }
        const tag = (e.target.tagName || '').toLowerCase();
        if (tag === 'input' || tag === 'textarea' || tag === 'select' || e.target.isContentEditable) return;
        if (e.metaKey || e.ctrlKey || e.altKey) return;
        const k = e.key.toLowerCase();
        if (e.key === '/') { e.preventDefault(); searchInput.focus(); }
        else         if (k === 'n') { e.preventDefault(); openAddSiteModal(); }
        else if (k === 't') { toggleTheme(); }
        else if (k === 'f') { toggleFavFilter(); }
        else if (k === 'v') { toggleView(); }
        else if (e.key === '?') { e.preventDefault(); openModal('helpModal'); }
    });
}

// ========================================================================
//  初始化
// ========================================================================
function init() {
    const loaded = loadState();
    state = loaded || seedState();
    loadSession();
    loadRecent();
    // 持久化归一化后的状态（含合并进来的新增默认网址 / 已移除的已删网址及其 seed 标记），
    // 确保"在 script.js 增删网址后，对应卡片与数据统计自动同步"这一结果被固化保存
    saveState();

    bindEvents();
    renderRecentPanel();
    renderAll();
}

document.addEventListener('DOMContentLoaded', init);
