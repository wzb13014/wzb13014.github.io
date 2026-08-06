// ========================================================================
//  数据（完整保留，自动统计数量）
// ========================================================================
const websiteData = [{
    id: 1,
    title: "国际标准",
    icon: "fa-flag",
    websites: [
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
    id: 2,
    title: "国家标准",
    icon: "fa-book",
    websites: [
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
    id: 3,
    title: "行业标准",
    icon: "fa-industry",
    websites: [
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
    id: 4,
    title: "地方标准",
    icon: "fa-map-marker-alt",
    websites: [
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
    id: 5,
    title: "团体标准",
    icon: "fa-users",
    websites: [
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
    id: 6,
    title: "各国标准",
    icon: "fa-solid fa-scale-balanced",
    websites: [
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
    id: 7,
    title: "其他标准",
    icon: "fa-file-alt",
    websites: [
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
    id: 8,
    title: "医疗标准",
    icon: "fa-file-alt",
    websites: [
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
    id: 9,
    title: "汽车标准",
    icon: "fa-file-alt",
    websites: [
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
}, 
{
    id: 30,
    title: "有害物质",
    icon: "fa-file-alt",
    websites: [
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
},

{
    id: 10,
    title: "资质查询",
    icon: "fa-id-card",
    websites: [
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
    ]
}, {
    id: 11,
    title: "国内法规",
    icon: "fa-gavel",
    websites: [
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
},
          {
    id: 31,
    title: "其他国家平台",
    icon: "fa-gavel",
    websites: [
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
},           
                     
         {
    id: 12,
    title: "合同范本",
    icon: "fa-file-contract",
    websites: [
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
    id: 13,
    title: "采购平台",
    icon: "fa-shopping-cart",
    websites: [
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
    id: 14,
    title: "招聘平台",
    icon: "fa-user-plus",
    websites: [
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
    id: 15,
    title: "程序开发",
    icon: "fa-code",
    websites: [
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
        { name: "Excel添加水印", url: "https://wzb13014.github.io/wzb/tool163", desc: "工具" },      
        { name: "XLS转换XLSX", url: "https://wzb13014.github.io/wzb/tool164", desc: "工具" },
        { name: "图片EXIF查看器", url: "https://wzb13014.github.io/wzb/tool165", desc: "工具" },
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
    id: 16,
    title: "办公工具",
    icon: "fa-desktop",
    websites: [
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
    id: 17,
    title: "效率工具",
    icon: "fa-bolt",
    websites: [
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
    id: 18,
    title: "专业软件",
    icon: "fa-cogs",
    websites: [
        { name: "FMEA COACH", url: "https://www.fmeacoach.com/#/", desc: "免费版FMEA 软件（终身免费）" },
        { name: "FreeSPC", url: "https://www.comcw.cn/pcsoft/6534.html", desc: "开源免费的 SPC 软件" },
        { name: "格式工厂", url: "http://pcgeshi.com/", desc: "格式转换" },
        { name: "ev录屏", url: "https://www.sootool.net/nexus/bi1/evluping.shtml?msclkid=1ea8e3bd237c12b4823d8b092c630dd1", desc: "录屏" },
        { name: "Everything", url: "https://www.voidtools.com/zh-cn/downloads/", desc: "文件检索" },
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
    id: 19,
    title: "模板下载",
    icon: "fa-download",
    websites: [
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
    id: 20,
    title: "AI模型",
    icon: "fa-robot",
    websites: [
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
    id: 21,
    title: "常用网站",
    icon: "fa-link",
    websites: [
        { name: "GitHub", url: "https://github.com/", desc: "GitHud" },
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
    id: 22,
    title: "资源网站",
    icon: "fa-folder-open",
    websites: [
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
    id: 23,
    title: "图库",
    icon: "fa-images",
    websites: [
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
    id: 24,
    title: "学教程",
    icon: "fa-graduation-cap",
    websites: [
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
    id: 25,
    title: "学习网站",
    icon: "fa-book-open",
    websites: [
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
    id: 26,
    title: "科普网站",
    icon: "fa-lightbulb",
    websites: [
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
    id: 27,
    title: "有趣网站",
    icon: "fa-gamepad",
    websites: [
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
    id: 28,
    title: "邮箱",
    icon: "fa-envelope",
    websites: [
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
    id: 29,
    title: "其他",
    icon: "fa-ellipsis-h",
    websites: [
        { name: "全国房价行情", url: "https://m.creprice.cn/", desc: "查询" },
        { name: "天下老照片", url: "http://www.laozhaopian5.com/", desc: "老照片" },
        { name: "影视", url: "https://yinghezhinan.com/sites/zaixian/", desc: "影视" },
    ]
}];

// ========================================================================
//  分类分组（一级 → 二级）
// ========================================================================
const groupMap = {
    '标准': [1, 2, 3, 4, 5, 6, 7, 8, 9, 30],
    '商务': [10, 11, 31, 12, 13, 14],
    '工具': [15, 16, 17, 18],
    '资源': [19, 20, 21, 22, 23],
    '学习': [24, 25, 26, 27],
    '其他': [28, 29]
};
const groupNames = ['全部', '标准', '商务', '工具', '资源', '学习', '其他'];

function getCategoryIdsByGroup(groupName) {
    if (groupName === '全部') return websiteData.map(c => c.id);
    return groupMap[groupName] || [];
}

function getCategoriesByGroup(groupName) {
    const ids = getCategoryIdsByGroup(groupName);
    return websiteData.filter(c => ids.includes(c.id));
}

function getTotalCountByGroup(groupName) {
    const cats = getCategoriesByGroup(groupName);
    let total = 0;
    cats.forEach(c => total += c.websites.length);
    return total;
}

// ========================================================================
//  状态
// ========================================================================
let currentGroup = '全部';
let currentCategory = 0; // 0 表示全部
let searchQuery = '';
let isDarkMode = false;
let pendingHighlight = null; // { categoryId, cardName }

// ========================================================================
//  DOM 引用
// ========================================================================
const navLevel1 = document.getElementById('navLevel1');
const subnavWrap = document.getElementById('subnavWrap');
const subnavInner = document.getElementById('subnavInner');
const container = document.getElementById('bookmarksContainer');
const searchInput = document.getElementById('searchInput');
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');

// ========================================================================
//  渲染一级菜单
// ========================================================================
function renderLevel1() {
    navLevel1.innerHTML = '';
    groupNames.forEach(name => {
        const el = document.createElement('span');
        el.className = 'nav-item' + (name === currentGroup ? ' active' : '');
        if (name === '全部') {
            const totalAll = websiteData.reduce((sum, c) => sum + c.websites.length, 0);
            el.textContent = `全部 (${totalAll})`;
        } else {
            el.textContent = name;
        }
        el.dataset.group = name;
        el.addEventListener('click', () => {
            currentGroup = name;
            const ids = getCategoryIdsByGroup(name);
            if (currentCategory !== 0 && !ids.includes(currentCategory)) {
                currentCategory = 0;
            }
            if (name === '全部') currentCategory = 0;
            searchQuery = '';
            searchInput.value = '';
            pendingHighlight = null;
            renderAll();
        });
        navLevel1.appendChild(el);
    });
}

// ========================================================================
//  渲染二级菜单（卡片上方横排）
// ========================================================================
function renderLevel2() {
    subnavInner.innerHTML = '';
    const categories = getCategoriesByGroup(currentGroup);

    if (currentGroup === '全部' || categories.length <= 1) {
        subnavWrap.classList.remove('visible');
        return;
    }

    subnavWrap.classList.add('visible');

    const total = getTotalCountByGroup(currentGroup);
    const allItem = document.createElement('span');
    allItem.className = 'sub-item' + (currentCategory === 0 ? ' active' : '');
    allItem.textContent = `全部 (${total})`;
    allItem.addEventListener('click', () => {
        currentCategory = 0;
        pendingHighlight = null;
        renderAll();
    });
    subnavInner.appendChild(allItem);

    categories.forEach(cat => {
        const item = document.createElement('span');
        item.className = 'sub-item' + (cat.id === currentCategory ? ' active' : '');
        item.textContent = cat.title;
        item.addEventListener('click', () => {
            currentCategory = cat.id;
            pendingHighlight = null;
            renderAll();
        });
        subnavInner.appendChild(item);
    });
}

// ========================================================================
//  渲染卡片
// ========================================================================
function renderCards() {
    container.innerHTML = '';

    let websites = [];
    if (currentCategory !== 0) {
        const cat = websiteData.find(c => c.id === currentCategory);
        if (cat) {
            websites = cat.websites.map(w => ({ ...w, categoryTitle: cat.title }));
        }
    } else {
        const cats = getCategoriesByGroup(currentGroup);
        cats.forEach(cat => {
            cat.websites.forEach(w => {
                websites.push({ ...w, categoryTitle: cat.title });
            });
        });
    }

    if (searchQuery.trim()) {
        const q = searchQuery.trim().toLowerCase();
        websites = websites.filter(w =>
            w.name.toLowerCase().includes(q) ||
            (w.desc && w.desc.toLowerCase().includes(q))
        );
        websites.sort((a, b) => {
            const aName = a.name.toLowerCase().includes(q);
            const bName = b.name.toLowerCase().includes(q);
            if (aName && !bName) return -1;
            if (!aName && bName) return 1;
            return a.name.localeCompare(b.name, 'zh-CN');
        });
    }

    if (websites.length === 0) {
        const empty = document.createElement('div');
        empty.className = 'no-results';
        empty.innerHTML = `
            <i class="fas fa-search"></i>
            <h3>没有找到网址</h3>
            <p>${searchQuery ? `未找到与"${searchQuery}"相关的网址` : '当前分类没有网址'}</p>
        `;
        container.appendChild(empty);
        return;
    }

    const showGroupTitles = (currentCategory === 0 && !searchQuery.trim());

    if (showGroupTitles) {
        const grouped = {};
        websites.forEach(w => {
            const key = w.categoryTitle || '未分类';
            if (!grouped[key]) grouped[key] = [];
            grouped[key].push(w);
        });

        for (const [title, list] of Object.entries(grouped)) {
            const h2 = document.createElement('h2');
            h2.className = 'category-title';
            const cat = websiteData.find(c => c.title === title);
            const icon = cat ? cat.icon : 'fa-search';
            h2.innerHTML = `
                <i class="fas ${icon}"></i>
                <span>${title} <span style="color: var(--text-secondary); font-weight: 600;">(${list.length})</span></span>
            `;
            container.appendChild(h2);
            const grid = document.createElement('div');
            grid.className = 'bookmarks-grid';
            list.forEach(w => grid.appendChild(createCard(w)));
            container.appendChild(grid);
        }
    } else {
        const grid = document.createElement('div');
        grid.className = 'bookmarks-grid';
        websites.forEach(w => grid.appendChild(createCard(w)));
        container.appendChild(grid);
    }

    // ---- 处理待高亮 ----
    if (pendingHighlight) {
        const target = pendingHighlight;
        pendingHighlight = null;
        requestAnimationFrame(() => {
            setTimeout(() => {
                const cards = document.querySelectorAll('.bookmark-card');
                for (const card of cards) {
                    const titleEl = card.querySelector('.bookmark-title');
                    if (titleEl && titleEl.textContent === target.cardName) {
                        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        card.classList.add('highlight');
                        setTimeout(() => {
                            card.classList.remove('highlight');
                        }, 3000);
                        break;
                    }
                }
            }, 100);
        });
    }
}

// ========================================================================
//  创建单个卡片（含定位按钮）
// ========================================================================
function createCard(website) {
    const a = document.createElement('a');
    a.className = 'bookmark-card';
    a.href = website.url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';

    const titleDiv = document.createElement('div');
    titleDiv.className = 'bookmark-title';
    titleDiv.textContent = website.name;

    const descDiv = document.createElement('div');
    descDiv.className = 'bookmark-desc';
    descDiv.textContent = website.desc || '';

    const footer = document.createElement('div');
    footer.className = 'bookmark-footer';

    const categorySpan = document.createElement('span');
    categorySpan.className = 'bookmark-category';
    categorySpan.textContent = website.categoryTitle || '未分类';

    const locateBtn = document.createElement('button');
    locateBtn.className = 'locate-btn';
    locateBtn.innerHTML = `
        <i class="fas fa-location-dot"></i>
        <span class="tooltip-text">定位到该分类</span>
    `;
    locateBtn.setAttribute('aria-label', '定位到该分类');
    locateBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault();
        locateCard(website.categoryTitle, website.name);
    });

    footer.appendChild(categorySpan);
    footer.appendChild(locateBtn);

    a.appendChild(titleDiv);
    a.appendChild(descDiv);
    a.appendChild(footer);

    return a;
}

// ========================================================================
//  定位卡片
// ========================================================================
function locateCard(categoryTitle, cardName) {
    if (!categoryTitle) return;

    const cat = websiteData.find(c => c.title === categoryTitle);
    if (!cat) return;

    // 如果当前就在目标分类且没有搜索，直接滚动并高亮
    if (currentCategory === cat.id && !searchQuery.trim()) {
        const cards = document.querySelectorAll('.bookmark-card');
        for (const card of cards) {
            const titleEl = card.querySelector('.bookmark-title');
            if (titleEl && titleEl.textContent === cardName) {
                cards.forEach(c => c.classList.remove('highlight'));
                card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                card.classList.add('highlight');
                setTimeout(() => {
                    card.classList.remove('highlight');
                }, 3000);
                return;
            }
        }
        // 如果没找到，走重新渲染流程
    }

    // 找到目标分类所属的一级分组
    let targetGroup = '全部';
    for (const [group, ids] of Object.entries(groupMap)) {
        if (ids.includes(cat.id)) {
            targetGroup = group;
            break;
        }
    }

    if (currentGroup !== targetGroup) {
        currentGroup = targetGroup;
    }

    currentCategory = cat.id;
    searchQuery = '';
    searchInput.value = '';

    pendingHighlight = { categoryId: cat.id, cardName };

    renderAll();
}

// ========================================================================
//  全部渲染
// ========================================================================
function renderAll() {
    renderLevel1();
    renderLevel2();
    renderCards();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ========================================================================
//  主题切换
// ========================================================================
function toggleTheme() {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode', isDarkMode);
    themeIcon.className = isDarkMode ? 'fas fa-sun' : 'fas fa-moon';
    localStorage.setItem('bookmarks-theme', isDarkMode ? 'dark' : 'light');
}

// ========================================================================
//  初始化
// ========================================================================
function init() {
    const saved = localStorage.getItem('bookmarks-theme');
    if (saved === 'dark') {
        isDarkMode = true;
        document.body.classList.add('dark-mode');
        themeIcon.className = 'fas fa-sun';
    }

    themeToggle.addEventListener('click', toggleTheme);

    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        pendingHighlight = null;
        renderAll();
    });

    currentGroup = '全部';
    currentCategory = 0;
    renderAll();
}

document.addEventListener('DOMContentLoaded', init);
复制
