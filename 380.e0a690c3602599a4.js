"use strict";(self.webpackChunkopice_rh=self.webpackChunkopice_rh||[]).push([[380],{35380:(Y,p,l)=>{l.r(p),l.d(p,{ChartsModule:()=>X});var c=l(85446),h=l(68521),d=l(39256),i=l(61333),I=l(87431),g=l(7672),t=l(94650);let u=(()=>{class a{static#e=this.\u0275fac=function(n){return new(n||a)};static#t=this.\u0275cmp=t.\u0275\u0275defineComponent({type:a,selectors:[["ngx-charts"]],decls:1,vars:0,template:function(n,e){1&n&&t.\u0275\u0275element(0,"router-outlet")},dependencies:[g.lC],encapsulation:2})}return a})(),b=(()=>{class a{constructor(s){this.theme=s,this.options={}}ngAfterViewInit(){this.themeSubscription=this.theme.getJsTheme().subscribe(s=>{const n=s.variables,e=s.variables.echarts;this.options={backgroundColor:e.bg,color:[n.danger,n.primary,n.info],tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c}"},legend:{left:"left",data:["Line 1","Line 2","Line 3"],textStyle:{color:e.textColor}},xAxis:[{type:"category",data:["1","2","3","4","5","6","7","8","9"],axisTick:{alignWithLabel:!0},axisLine:{lineStyle:{color:e.axisLineColor}},axisLabel:{textStyle:{color:e.textColor}}}],yAxis:[{type:"log",axisLine:{lineStyle:{color:e.axisLineColor}},splitLine:{lineStyle:{color:e.splitLineColor}},axisLabel:{textStyle:{color:e.textColor}}}],grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},series:[{name:"Line 1",type:"line",data:[1,3,9,27,81,247,741,2223,6669]},{name:"Line 2",type:"line",data:[1,2,4,8,16,32,64,128,256]},{name:"Line 3",type:"line",data:[.5,1/4,1/8,1/16,1/32,1/64,1/128,1/256,1/512]}]}})}ngOnDestroy(){this.themeSubscription.unsubscribe()}static#e=this.\u0275fac=function(n){return new(n||a)(t.\u0275\u0275directiveInject(i.WMF))};static#t=this.\u0275cmp=t.\u0275\u0275defineComponent({type:a,selectors:[["ngx-echarts-line"]],decls:1,vars:1,consts:[["echarts","",1,"echart",3,"options"]],template:function(n,e){1&n&&t.\u0275\u0275element(0,"div",0),2&n&&t.\u0275\u0275property("options",e.options)},dependencies:[c.w],encapsulation:2})}return a})(),x=(()=>{class a{constructor(s){this.theme=s,this.options={}}ngAfterViewInit(){this.themeSubscription=this.theme.getJsTheme().subscribe(s=>{const n=s.variables,e=s.variables.echarts;this.options={backgroundColor:e.bg,color:[n.warningLight,n.infoLight,n.dangerLight,n.successLight,n.primaryLight],tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{orient:"vertical",left:"left",data:["USA","Germany","France","Canada","Russia"],textStyle:{color:e.textColor}},series:[{name:"Countries",type:"pie",radius:"80%",center:["50%","50%"],data:[{value:335,name:"Germany"},{value:310,name:"France"},{value:234,name:"Canada"},{value:135,name:"Russia"},{value:1548,name:"USA"}],itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:e.itemHoverShadowColor}},label:{normal:{textStyle:{color:e.textColor}}},labelLine:{normal:{lineStyle:{color:e.axisLineColor}}}}]}})}ngOnDestroy(){this.themeSubscription.unsubscribe()}static#e=this.\u0275fac=function(n){return new(n||a)(t.\u0275\u0275directiveInject(i.WMF))};static#t=this.\u0275cmp=t.\u0275\u0275defineComponent({type:a,selectors:[["ngx-echarts-pie"]],decls:1,vars:1,consts:[["echarts","",1,"echart",3,"options"]],template:function(n,e){1&n&&t.\u0275\u0275element(0,"div",0),2&n&&t.\u0275\u0275property("options",e.options)},dependencies:[c.w],encapsulation:2})}return a})(),C=(()=>{class a{constructor(s){this.theme=s,this.options={}}ngAfterViewInit(){this.themeSubscription=this.theme.getJsTheme().subscribe(s=>{const e=s.variables.echarts;this.options={backgroundColor:e.bg,color:[s.variables.primaryLight],tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],axisTick:{alignWithLabel:!0},axisLine:{lineStyle:{color:e.axisLineColor}},axisLabel:{textStyle:{color:e.textColor}}}],yAxis:[{type:"value",axisLine:{lineStyle:{color:e.axisLineColor}},splitLine:{lineStyle:{color:e.splitLineColor}},axisLabel:{textStyle:{color:e.textColor}}}],series:[{name:"Score",type:"bar",barWidth:"60%",data:[10,52,200,334,390,330,220]}]}})}ngOnDestroy(){this.themeSubscription.unsubscribe()}static#e=this.\u0275fac=function(n){return new(n||a)(t.\u0275\u0275directiveInject(i.WMF))};static#t=this.\u0275cmp=t.\u0275\u0275defineComponent({type:a,selectors:[["ngx-echarts-bar"]],decls:1,vars:1,consts:[["echarts","",1,"echart",3,"options"]],template:function(n,e){1&n&&t.\u0275\u0275element(0,"div",0),2&n&&t.\u0275\u0275property("options",e.options)},dependencies:[c.w],encapsulation:2})}return a})(),y=(()=>{class a{constructor(s){this.theme=s,this.options={}}ngAfterViewInit(){this.themeSubscription=this.theme.getJsTheme().subscribe(s=>{const n=s.variables,e=s.variables.echarts;this.options={backgroundColor:e.bg,color:[n.success,n.info],tooltip:{trigger:"none",axisPointer:{type:"cross"}},legend:{data:["2015 Precipitation","2016 Precipitation"],textStyle:{color:e.textColor}},grid:{top:70,bottom:50},xAxis:[{type:"category",axisTick:{alignWithLabel:!0},axisLine:{onZero:!1,lineStyle:{color:n.info}},axisLabel:{textStyle:{color:e.textColor}},axisPointer:{label:{formatter:o=>"Precipitation  "+o.value+(o.seriesData.length?"\uff1a"+o.seriesData[0].data:"")}},data:["2016-1","2016-2","2016-3","2016-4","2016-5","2016-6","2016-7","2016-8","2016-9","2016-10","2016-11","2016-12"]},{type:"category",axisTick:{alignWithLabel:!0},axisLine:{onZero:!1,lineStyle:{color:n.success}},axisLabel:{textStyle:{color:e.textColor}},axisPointer:{label:{formatter:o=>"Precipitation  "+o.value+(o.seriesData.length?"\uff1a"+o.seriesData[0].data:"")}},data:["2015-1","2015-2","2015-3","2015-4","2015-5","2015-6","2015-7","2015-8","2015-9","2015-10","2015-11","2015-12"]}],yAxis:[{type:"value",axisLine:{lineStyle:{color:e.axisLineColor}},splitLine:{lineStyle:{color:e.splitLineColor}},axisLabel:{textStyle:{color:e.textColor}}}],series:[{name:"2015 Precipitation",type:"line",xAxisIndex:1,smooth:!0,data:[2.6,5.9,9,26.4,28.7,70.7,175.6,182.2,48.7,18.8,6,2.3]},{name:"2016 Precipitation",type:"line",smooth:!0,data:[3.9,5.9,11.1,18.7,48.3,69.2,231.6,46.6,55.4,18.4,10.3,.7]}]}})}ngOnDestroy(){this.themeSubscription.unsubscribe()}static#e=this.\u0275fac=function(n){return new(n||a)(t.\u0275\u0275directiveInject(i.WMF))};static#t=this.\u0275cmp=t.\u0275\u0275defineComponent({type:a,selectors:[["ngx-echarts-multiple-xaxis"]],decls:1,vars:1,consts:[["echarts","",1,"echart",3,"options"]],template:function(n,e){1&n&&t.\u0275\u0275element(0,"div",0),2&n&&t.\u0275\u0275property("options",e.options)},dependencies:[c.w],encapsulation:2})}return a})(),v=(()=>{class a{constructor(s){this.theme=s,this.options={}}ngAfterViewInit(){this.themeSubscription=this.theme.getJsTheme().subscribe(s=>{const n=s.variables,e=s.variables.echarts;this.options={backgroundColor:e.bg,color:[n.warningLight,n.infoLight,n.dangerLight,n.successLight,n.primaryLight],tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:e.tooltipBackgroundColor}}},legend:{data:["Mail marketing","Affiliate advertising","Video ad","Direct interview","Search engine"],textStyle:{color:e.textColor}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,data:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],axisTick:{alignWithLabel:!0},axisLine:{lineStyle:{color:e.axisLineColor}},axisLabel:{textStyle:{color:e.textColor}}}],yAxis:[{type:"value",axisLine:{lineStyle:{color:e.axisLineColor}},splitLine:{lineStyle:{color:e.splitLineColor}},axisLabel:{textStyle:{color:e.textColor}}}],series:[{name:"Mail marketing",type:"line",stack:"Total amount",areaStyle:{normal:{opacity:e.areaOpacity}},data:[120,132,101,134,90,230,210]},{name:"Affiliate advertising",type:"line",stack:"Total amount",areaStyle:{normal:{opacity:e.areaOpacity}},data:[220,182,191,234,290,330,310]},{name:"Video ad",type:"line",stack:"Total amount",areaStyle:{normal:{opacity:e.areaOpacity}},data:[150,232,201,154,190,330,410]},{name:"Direct interview",type:"line",stack:"Total amount",areaStyle:{normal:{opacity:e.areaOpacity}},data:[320,332,301,334,390,330,320]},{name:"Search engine",type:"line",stack:"Total amount",label:{normal:{show:!0,position:"top",textStyle:{color:e.textColor}}},areaStyle:{normal:{opacity:e.areaOpacity}},data:[820,932,901,934,1290,1330,1320]}]}})}ngOnDestroy(){this.themeSubscription.unsubscribe()}static#e=this.\u0275fac=function(n){return new(n||a)(t.\u0275\u0275directiveInject(i.WMF))};static#t=this.\u0275cmp=t.\u0275\u0275defineComponent({type:a,selectors:[["ngx-echarts-area-stack"]],decls:1,vars:1,consts:[["echarts","",1,"echart",3,"options"]],template:function(n,e){1&n&&t.\u0275\u0275element(0,"div",0),2&n&&t.\u0275\u0275property("options",e.options)},dependencies:[c.w],encapsulation:2})}return a})(),L=(()=>{class a{constructor(s){this.theme=s,this.options={}}ngAfterViewInit(){this.themeSubscription=this.theme.getJsTheme().subscribe(s=>{const n=[],e=[],o=[],W=s.variables,m=s.variables.echarts;this.options={backgroundColor:m.bg,color:[W.primaryLight,W.infoLight],legend:{data:["bar","bar2"],align:"left",textStyle:{color:m.textColor}},xAxis:[{data:n,silent:!1,axisTick:{alignWithLabel:!0},axisLine:{lineStyle:{color:m.axisLineColor}},axisLabel:{textStyle:{color:m.textColor}}}],yAxis:[{axisLine:{lineStyle:{color:m.axisLineColor}},splitLine:{lineStyle:{color:m.splitLineColor}},axisLabel:{textStyle:{color:m.textColor}}}],series:[{name:"bar",type:"bar",data:e,animationDelay:r=>10*r},{name:"bar2",type:"bar",data:o,animationDelay:r=>10*r+100}],animationEasing:"elasticOut",animationDelayUpdate:r=>5*r};for(let r=0;r<100;r++)n.push("Category "+r),e.push(5*(Math.sin(r/5)*(r/5-10)+r/6)),o.push(5*(Math.cos(r/5)*(r/5-10)+r/6))})}ngOnDestroy(){this.themeSubscription.unsubscribe()}static#e=this.\u0275fac=function(n){return new(n||a)(t.\u0275\u0275directiveInject(i.WMF))};static#t=this.\u0275cmp=t.\u0275\u0275defineComponent({type:a,selectors:[["ngx-echarts-bar-animation"]],decls:1,vars:1,consts:[["echarts","",1,"echart",3,"options"]],template:function(n,e){1&n&&t.\u0275\u0275element(0,"div",0),2&n&&t.\u0275\u0275property("options",e.options)},dependencies:[c.w],encapsulation:2})}return a})(),M=(()=>{class a{constructor(s){this.theme=s,this.options={}}ngAfterViewInit(){this.themeSubscription=this.theme.getJsTheme().subscribe(s=>{const n=s.variables,e=s.variables.echarts;this.options={backgroundColor:e.bg,color:[n.danger,n.warning],tooltip:{},legend:{data:["Allocated Budget","Actual Spending"],textStyle:{color:e.textColor}},radar:{name:{textStyle:{color:e.textColor}},indicator:[{name:"Sales",max:6500},{name:"Administration",max:16e3},{name:"Information Techology",max:3e4},{name:"Customer Support",max:38e3},{name:"Development",max:52e3},{name:"Marketing",max:25e3}],splitArea:{areaStyle:{color:"transparent"}}},series:[{name:"Budget vs Spending",type:"radar",data:[{value:[4300,1e4,28e3,35e3,5e4,19e3],name:"Allocated Budget"},{value:[5e3,14e3,28e3,31e3,42e3,21e3],name:"Actual Spending"}]}]}})}ngOnDestroy(){this.themeSubscription.unsubscribe()}static#e=this.\u0275fac=function(n){return new(n||a)(t.\u0275\u0275directiveInject(i.WMF))};static#t=this.\u0275cmp=t.\u0275\u0275defineComponent({type:a,selectors:[["ngx-echarts-radar"]],decls:1,vars:1,consts:[["echarts","",1,"echart",3,"options"]],template:function(n,e){1&n&&t.\u0275\u0275element(0,"div",0),2&n&&t.\u0275\u0275property("options",e.options)},dependencies:[c.w],encapsulation:2})}return a})(),f=(()=>{class a{static#e=this.\u0275fac=function(n){return new(n||a)};static#t=this.\u0275cmp=t.\u0275\u0275defineComponent({type:a,selectors:[["ngx-echarts"]],decls:43,vars:0,consts:[[1,"row"],[1,"col-lg-6"]],template:function(n,e){1&n&&(t.\u0275\u0275elementStart(0,"div",0)(1,"div",1)(2,"nb-card")(3,"nb-card-header"),t.\u0275\u0275text(4,"Pie"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(5,"nb-card-body"),t.\u0275\u0275element(6,"ngx-echarts-pie"),t.\u0275\u0275elementEnd()()(),t.\u0275\u0275elementStart(7,"div",1)(8,"nb-card")(9,"nb-card-header"),t.\u0275\u0275text(10,"Bar"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(11,"nb-card-body"),t.\u0275\u0275element(12,"ngx-echarts-bar"),t.\u0275\u0275elementEnd()()(),t.\u0275\u0275elementStart(13,"div",1)(14,"nb-card")(15,"nb-card-header"),t.\u0275\u0275text(16,"Line"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(17,"nb-card-body"),t.\u0275\u0275element(18,"ngx-echarts-line"),t.\u0275\u0275elementEnd()()(),t.\u0275\u0275elementStart(19,"div",1)(20,"nb-card")(21,"nb-card-header"),t.\u0275\u0275text(22,"Multiple x-axis"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(23,"nb-card-body"),t.\u0275\u0275element(24,"ngx-echarts-multiple-xaxis"),t.\u0275\u0275elementEnd()()(),t.\u0275\u0275elementStart(25,"div",1)(26,"nb-card")(27,"nb-card-header"),t.\u0275\u0275text(28,"Area Stack"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(29,"nb-card-body"),t.\u0275\u0275element(30,"ngx-echarts-area-stack"),t.\u0275\u0275elementEnd()()(),t.\u0275\u0275elementStart(31,"div",1)(32,"nb-card")(33,"nb-card-header"),t.\u0275\u0275text(34,"Bar Animation"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(35,"nb-card-body"),t.\u0275\u0275element(36,"ngx-echarts-bar-animation"),t.\u0275\u0275elementEnd()()(),t.\u0275\u0275elementStart(37,"div",1)(38,"nb-card")(39,"nb-card-header"),t.\u0275\u0275text(40,"Radar"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(41,"nb-card-body"),t.\u0275\u0275element(42,"ngx-echarts-radar"),t.\u0275\u0275elementEnd()()()())},dependencies:[i.Asz,i.yKW,i.ndF,b,x,C,y,v,L,M],styles:["[_nghost-%COMP%]   ngx-echarts-pie[_ngcontent-%COMP%], [_nghost-%COMP%]   ngx-echarts-bar[_ngcontent-%COMP%], [_nghost-%COMP%]   ngx-echarts-line[_ngcontent-%COMP%], [_nghost-%COMP%]   ngx-echarts-multiple-xaxis[_ngcontent-%COMP%], [_nghost-%COMP%]   ngx-echarts-area-stack[_ngcontent-%COMP%], [_nghost-%COMP%]   ngx-echarts-bar-animation[_ngcontent-%COMP%], [_nghost-%COMP%]   ngx-echarts-radar[_ngcontent-%COMP%]{display:block;height:var(--card-height-medium);width:100%}[_nghost-%COMP%]     .echart{height:100%;width:100%}"]})}return a})(),P=(()=>{class a{constructor(s){this.theme=s,this.results=[{name:"Germany",value:8940},{name:"USA",value:5e3},{name:"France",value:7200}],this.showLegend=!0,this.showXAxis=!0,this.showYAxis=!0,this.xAxisLabel="Country",this.yAxisLabel="Population",this.themeSubscription=this.theme.getJsTheme().subscribe(n=>{const e=n.variables;this.colorScheme={domain:[e.primaryLight,e.infoLight,e.successLight,e.warningLight,e.dangerLight]}})}ngOnDestroy(){this.themeSubscription.unsubscribe()}static#e=this.\u0275fac=function(n){return new(n||a)(t.\u0275\u0275directiveInject(i.WMF))};static#t=this.\u0275cmp=t.\u0275\u0275defineComponent({type:a,selectors:[["ngx-d3-bar"]],decls:1,vars:7,consts:[[3,"scheme","results","xAxis","yAxis","legend","xAxisLabel","yAxisLabel"]],template:function(n,e){1&n&&t.\u0275\u0275element(0,"ngx-charts-bar-vertical",0),2&n&&t.\u0275\u0275property("scheme",e.colorScheme)("results",e.results)("xAxis",e.showXAxis)("yAxis",e.showYAxis)("legend",e.showLegend)("xAxisLabel",e.xAxisLabel)("yAxisLabel",e.yAxisLabel)},dependencies:[h.K$],encapsulation:2})}return a})(),O=(()=>{class a{constructor(s){this.theme=s,this.multi=[{name:"Germany",series:[{name:"2010",value:7300},{name:"2011",value:8940}]},{name:"USA",series:[{name:"2010",value:7870},{name:"2011",value:8270}]},{name:"France",series:[{name:"2010",value:5002},{name:"2011",value:5800}]}],this.showLegend=!0,this.showXAxis=!0,this.showYAxis=!0,this.showXAxisLabel=!0,this.xAxisLabel="Country",this.showYAxisLabel=!0,this.yAxisLabel="Population",this.themeSubscription=this.theme.getJsTheme().subscribe(n=>{const e=n.variables;this.colorScheme={domain:[e.primaryLight,e.infoLight,e.successLight,e.warningLight,e.dangerLight]}})}ngOnDestroy(){this.themeSubscription.unsubscribe()}static#e=this.\u0275fac=function(n){return new(n||a)(t.\u0275\u0275directiveInject(i.WMF))};static#t=this.\u0275cmp=t.\u0275\u0275defineComponent({type:a,selectors:[["ngx-d3-line"]],decls:1,vars:9,consts:[[3,"scheme","results","xAxis","yAxis","legend","showXAxisLabel","showYAxisLabel","xAxisLabel","yAxisLabel"]],template:function(n,e){1&n&&t.\u0275\u0275element(0,"ngx-charts-line-chart",0),2&n&&t.\u0275\u0275property("scheme",e.colorScheme)("results",e.multi)("xAxis",e.showXAxis)("yAxis",e.showYAxis)("legend",e.showLegend)("showXAxisLabel",e.showXAxisLabel)("showYAxisLabel",e.showYAxisLabel)("xAxisLabel",e.xAxisLabel)("yAxisLabel",e.yAxisLabel)},dependencies:[h.Dw],encapsulation:2})}return a})(),S=(()=>{class a{constructor(s){this.theme=s,this.results=[{name:"Germany",value:8940},{name:"USA",value:5e3},{name:"France",value:7200}],this.showLegend=!0,this.showLabels=!0,this.themeSubscription=this.theme.getJsTheme().subscribe(n=>{const e=n.variables;this.colorScheme={domain:[e.primaryLight,e.infoLight,e.successLight,e.warningLight,e.dangerLight]}})}ngOnDestroy(){this.themeSubscription.unsubscribe()}static#e=this.\u0275fac=function(n){return new(n||a)(t.\u0275\u0275directiveInject(i.WMF))};static#t=this.\u0275cmp=t.\u0275\u0275defineComponent({type:a,selectors:[["ngx-d3-pie"]],decls:1,vars:4,consts:[[3,"scheme","results","legend","labels"]],template:function(n,e){1&n&&t.\u0275\u0275element(0,"ngx-charts-pie-chart",0),2&n&&t.\u0275\u0275property("scheme",e.colorScheme)("results",e.results)("legend",e.showLegend)("labels",e.showLabels)},dependencies:[h.JU],encapsulation:2})}return a})(),_=(()=>{class a{constructor(s){this.theme=s,this.multi=[{name:"Germany",series:[{name:"2010",value:73e5},{name:"2011",value:894e4}]},{name:"USA",series:[{name:"2010",value:787e4},{name:"2011",value:827e4}]},{name:"France",series:[{name:"2010",value:5000002},{name:"2011",value:58e5}]}],this.showLegend=!0,this.autoScale=!0,this.showXAxis=!0,this.showYAxis=!0,this.showXAxisLabel=!0,this.showYAxisLabel=!0,this.xAxisLabel="Country",this.yAxisLabel="Population",this.themeSubscription=this.theme.getJsTheme().subscribe(n=>{const e=n.variables;this.colorScheme={domain:[e.primaryLight,e.infoLight,e.successLight,e.warningLight,e.dangerLight]}})}ngOnDestroy(){this.themeSubscription.unsubscribe()}static#e=this.\u0275fac=function(n){return new(n||a)(t.\u0275\u0275directiveInject(i.WMF))};static#t=this.\u0275cmp=t.\u0275\u0275defineComponent({type:a,selectors:[["ngx-d3-area-stack"]],decls:1,vars:10,consts:[[3,"scheme","results","xAxis","yAxis","legend","showXAxisLabel","showYAxisLabel","xAxisLabel","yAxisLabel","autoScale"]],template:function(n,e){1&n&&t.\u0275\u0275element(0,"ngx-charts-area-chart",0),2&n&&t.\u0275\u0275property("scheme",e.colorScheme)("results",e.multi)("xAxis",e.showXAxis)("yAxis",e.showYAxis)("legend",e.showLegend)("showXAxisLabel",e.showXAxisLabel)("showYAxisLabel",e.showYAxisLabel)("xAxisLabel",e.xAxisLabel)("yAxisLabel",e.yAxisLabel)("autoScale",e.autoScale)},dependencies:[h.rt],encapsulation:2})}return a})(),A=(()=>{class a{constructor(s){this.theme=s,this.single=[{name:"Germany",value:894e4},{name:"USA",value:5e6},{name:"France",value:72e5}],this.themeSubscription=this.theme.getJsTheme().subscribe(n=>{const e=n.variables;this.colorScheme={domain:[e.primaryLight,e.infoLight,e.successLight,e.warningLight,e.dangerLight]}})}ngOnDestroy(){this.themeSubscription.unsubscribe()}static#e=this.\u0275fac=function(n){return new(n||a)(t.\u0275\u0275directiveInject(i.WMF))};static#t=this.\u0275cmp=t.\u0275\u0275defineComponent({type:a,selectors:[["ngx-d3-advanced-pie"]],decls:1,vars:2,consts:[[3,"scheme","results"]],template:function(n,e){1&n&&t.\u0275\u0275element(0,"ngx-charts-advanced-pie-chart",0),2&n&&t.\u0275\u0275property("scheme",e.colorScheme)("results",e.single)},dependencies:[h.MP],encapsulation:2})}return a})(),w=(()=>{class a{static#e=this.\u0275fac=function(n){return new(n||a)};static#t=this.\u0275cmp=t.\u0275\u0275defineComponent({type:a,selectors:[["ngx-d3"]],decls:31,vars:0,consts:[[1,"row"],[1,"col-lg-6"]],template:function(n,e){1&n&&(t.\u0275\u0275elementStart(0,"div",0)(1,"div",1)(2,"nb-card")(3,"nb-card-header"),t.\u0275\u0275text(4,"Pie"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(5,"nb-card-body"),t.\u0275\u0275element(6,"ngx-d3-pie"),t.\u0275\u0275elementEnd()()(),t.\u0275\u0275elementStart(7,"div",1)(8,"nb-card")(9,"nb-card-header"),t.\u0275\u0275text(10,"Bar"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(11,"nb-card-body"),t.\u0275\u0275element(12,"ngx-d3-bar"),t.\u0275\u0275elementEnd()()(),t.\u0275\u0275elementStart(13,"div",1)(14,"nb-card")(15,"nb-card-header"),t.\u0275\u0275text(16,"Line"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(17,"nb-card-body"),t.\u0275\u0275element(18,"ngx-d3-line"),t.\u0275\u0275elementEnd()()(),t.\u0275\u0275elementStart(19,"div",1)(20,"nb-card")(21,"nb-card-header"),t.\u0275\u0275text(22,"Advanced Pie"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(23,"nb-card-body"),t.\u0275\u0275element(24,"ngx-d3-advanced-pie"),t.\u0275\u0275elementEnd()()(),t.\u0275\u0275elementStart(25,"div",1)(26,"nb-card")(27,"nb-card-header"),t.\u0275\u0275text(28,"Area Chart"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(29,"nb-card-body"),t.\u0275\u0275element(30,"ngx-d3-area-stack"),t.\u0275\u0275elementEnd()()()())},dependencies:[i.Asz,i.yKW,i.ndF,P,O,S,_,A],styles:["[_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%], [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%], [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%], [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%], [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%], [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]{display:block;width:100%;height:var(--card-height-medium)}[_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%]     .pie-label, [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%]     .pie-label, [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%]     .pie-label, [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%]     .pie-label, [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%]     .pie-label, [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]     .pie-label{fill:var(--text-basic-color)}[_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%]     text, [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%]     text, [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%]     text, [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%]     text, [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%]     text, [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]     text{fill:var(--text-hint-color)}[_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%]     .chart-legend .legend-labels, [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%]     .chart-legend .legend-labels, [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%]     .chart-legend .legend-labels, [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%]     .chart-legend .legend-labels, [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%]     .chart-legend .legend-labels, [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]     .chart-legend .legend-labels{background:var(--background-basic-color-2)}[_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%]     .chart-legend .legend-label, [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%]     .chart-legend .legend-label, [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%]     .chart-legend .legend-label, [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%]     .chart-legend .legend-label, [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%]     .chart-legend .legend-label, [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]     .chart-legend .legend-label{color:var(--text-hint-color)}[_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%]     .chart-legend .legend-label .active .legend-label-text, [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%]     .chart-legend .legend-label .active .legend-label-text, [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%]     .chart-legend .legend-label .active .legend-label-text, [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%]     .chart-legend .legend-label .active .legend-label-text, [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%]     .chart-legend .legend-label .active .legend-label-text, [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]     .chart-legend .legend-label .active .legend-label-text{color:var(--text-basic-color)}[_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%]     .total-value, [_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%]     .item-value, [_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%]     .item-percent, [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%]     .total-value, [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%]     .item-value, [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%]     .item-percent, [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%]     .total-value, [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%]     .item-value, [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%]     .item-percent, [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%]     .total-value, [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%]     .item-value, [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%]     .item-percent, [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%]     .total-value, [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%]     .item-value, [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%]     .item-percent, [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]     .total-value, [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]     .item-value, [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]     .item-percent{line-height:1.25}[_nghost-%COMP%]   ngx-d3-bar[_ngcontent-%COMP%]     .legend-items, [_nghost-%COMP%]   ngx-d3-pie[_ngcontent-%COMP%]     .legend-items, [_nghost-%COMP%]   ngx-d3-advanced-pie[_ngcontent-%COMP%]     .legend-items, [_nghost-%COMP%]   ngx-d3-area-stack[_ngcontent-%COMP%]     .legend-items, [_nghost-%COMP%]   ngx-d3-line[_ngcontent-%COMP%]     .legend-items, [_nghost-%COMP%]   ngx-d3-polar[_ngcontent-%COMP%]     .legend-items{overflow-y:hidden}"]})}return a})(),j=(()=>{class a{constructor(s){this.theme=s,this.themeSubscription=this.theme.getJsTheme().subscribe(n=>{const e=n.variables,o=n.variables.chartjs;this.data={labels:["2006","2007","2008","2009","2010","2011","2012"],datasets:[{data:[65,59,80,81,56,55,40],label:"Series A",backgroundColor:i.c5R.hexToRgbA(e.primaryLight,.8)},{data:[28,48,40,19,86,27,90],label:"Series B",backgroundColor:i.c5R.hexToRgbA(e.infoLight,.8)}]},this.options={maintainAspectRatio:!1,responsive:!0,legend:{labels:{fontColor:o.textColor}},scales:{xAxes:[{gridLines:{display:!1,color:o.axisLineColor},ticks:{fontColor:o.textColor}}],yAxes:[{gridLines:{display:!0,color:o.axisLineColor},ticks:{fontColor:o.textColor}}]}}})}ngOnDestroy(){this.themeSubscription.unsubscribe()}static#e=this.\u0275fac=function(n){return new(n||a)(t.\u0275\u0275directiveInject(i.WMF))};static#t=this.\u0275cmp=t.\u0275\u0275defineComponent({type:a,selectors:[["ngx-chartjs-bar"]],decls:1,vars:2,consts:[["type","bar",3,"data","options"]],template:function(n,e){1&n&&t.\u0275\u0275element(0,"chart",0),2&n&&t.\u0275\u0275property("data",e.data)("options",e.options)},dependencies:[d.ChartComponent],encapsulation:2})}return a})(),k=(()=>{class a{constructor(s){this.theme=s,this.themeSubscription=this.theme.getJsTheme().subscribe(n=>{const e=n.variables,o=n.variables.chartjs;this.data={labels:["January","February","March","April","May","June","July"],datasets:[{data:[65,59,80,81,56,55,40],label:"Series A",backgroundColor:i.c5R.hexToRgbA(e.primary,.3),borderColor:e.primary},{data:[28,48,40,19,86,27,90],label:"Series B",backgroundColor:i.c5R.hexToRgbA(e.danger,.3),borderColor:e.danger},{data:[18,48,77,9,100,27,40],label:"Series C",backgroundColor:i.c5R.hexToRgbA(e.info,.3),borderColor:e.info}]},this.options={responsive:!0,maintainAspectRatio:!1,scales:{xAxes:[{gridLines:{display:!0,color:o.axisLineColor},ticks:{fontColor:o.textColor}}],yAxes:[{gridLines:{display:!0,color:o.axisLineColor},ticks:{fontColor:o.textColor}}]},legend:{labels:{fontColor:o.textColor}}}})}ngOnDestroy(){this.themeSubscription.unsubscribe()}static#e=this.\u0275fac=function(n){return new(n||a)(t.\u0275\u0275directiveInject(i.WMF))};static#t=this.\u0275cmp=t.\u0275\u0275defineComponent({type:a,selectors:[["ngx-chartjs-line"]],decls:1,vars:2,consts:[["type","line",3,"data","options"]],template:function(n,e){1&n&&t.\u0275\u0275element(0,"chart",0),2&n&&t.\u0275\u0275property("data",e.data)("options",e.options)},dependencies:[d.ChartComponent],encapsulation:2})}return a})(),T=(()=>{class a{constructor(s){this.theme=s,this.themeSubscription=this.theme.getJsTheme().subscribe(n=>{const e=n.variables,o=n.variables.chartjs;this.data={labels:["Download Sales","In-Store Sales","Mail Sales"],datasets:[{data:[300,500,100],backgroundColor:[e.primaryLight,e.infoLight,e.successLight]}]},this.options={maintainAspectRatio:!1,responsive:!0,scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},legend:{labels:{fontColor:o.textColor}}}})}ngOnDestroy(){this.themeSubscription.unsubscribe()}static#e=this.\u0275fac=function(n){return new(n||a)(t.\u0275\u0275directiveInject(i.WMF))};static#t=this.\u0275cmp=t.\u0275\u0275defineComponent({type:a,selectors:[["ngx-chartjs-pie"]],decls:1,vars:2,consts:[["type","pie",3,"data","options"]],template:function(n,e){1&n&&t.\u0275\u0275element(0,"chart",0),2&n&&t.\u0275\u0275property("data",e.data)("options",e.options)},dependencies:[d.ChartComponent],encapsulation:2})}return a})(),F=(()=>{class a{constructor(s){this.theme=s,this.themeSubscription=this.theme.getJsTheme().subscribe(n=>{const e=n.variables,o=n.variables.chartjs;this.data={labels:["January","February","March","April","May","June"],datasets:[{label:"dataset - big points",data:[this.random(),this.random(),this.random(),this.random(),this.random(),this.random()],borderColor:e.primary,backgroundColor:e.primary,fill:!1,borderDash:[5,5],pointRadius:8,pointHoverRadius:10},{label:"dataset - individual point sizes",data:[this.random(),this.random(),this.random(),this.random(),this.random(),this.random()],borderColor:e.dangerLight,backgroundColor:e.dangerLight,fill:!1,borderDash:[5,5],pointRadius:8,pointHoverRadius:10},{label:"dataset - large pointHoverRadius",data:[this.random(),this.random(),this.random(),this.random(),this.random(),this.random()],borderColor:e.info,backgroundColor:e.info,fill:!1,pointRadius:8,pointHoverRadius:10},{label:"dataset - large pointHitRadius",data:[this.random(),this.random(),this.random(),this.random(),this.random(),this.random()],borderColor:e.success,backgroundColor:e.success,fill:!1,pointRadius:8,pointHoverRadius:10}]},this.options={responsive:!0,maintainAspectRatio:!1,legend:{position:"bottom",labels:{fontColor:o.textColor}},hover:{mode:"index"},scales:{xAxes:[{display:!0,scaleLabel:{display:!0,labelString:"Month"},gridLines:{display:!0,color:o.axisLineColor},ticks:{fontColor:o.textColor}}],yAxes:[{display:!0,scaleLabel:{display:!0,labelString:"Value"},gridLines:{display:!0,color:o.axisLineColor},ticks:{fontColor:o.textColor}}]}}})}ngOnDestroy(){this.themeSubscription.unsubscribe()}random(){return Math.round(100*Math.random())}static#e=this.\u0275fac=function(n){return new(n||a)(t.\u0275\u0275directiveInject(i.WMF))};static#t=this.\u0275cmp=t.\u0275\u0275defineComponent({type:a,selectors:[["ngx-chartjs-multiple-xaxis"]],decls:1,vars:2,consts:[["type","line",3,"data","options"]],template:function(n,e){1&n&&t.\u0275\u0275element(0,"chart",0),2&n&&t.\u0275\u0275property("data",e.data)("options",e.options)},dependencies:[d.ChartComponent],encapsulation:2})}return a})(),E=(()=>{class a{constructor(s){this.theme=s,this.themeSubscription=this.theme.getJsTheme().subscribe(n=>{const e=n.variables,o=n.variables.chartjs;this.data={labels:["January","February","March","April","May","June"],datasets:[{label:"Dataset 1",backgroundColor:e.infoLight,borderWidth:1,data:[this.random(),this.random(),this.random(),this.random(),this.random(),this.random()]},{label:"Dataset 2",backgroundColor:e.successLight,data:[this.random(),this.random(),this.random(),this.random(),this.random(),this.random()]}]},this.options={responsive:!0,maintainAspectRatio:!1,elements:{rectangle:{borderWidth:2}},scales:{xAxes:[{gridLines:{display:!0,color:o.axisLineColor},ticks:{fontColor:o.textColor}}],yAxes:[{gridLines:{display:!1,color:o.axisLineColor},ticks:{fontColor:o.textColor}}]},legend:{position:"right",labels:{fontColor:o.textColor}}}})}ngOnDestroy(){this.themeSubscription.unsubscribe()}random(){return Math.round(100*Math.random())}static#e=this.\u0275fac=function(n){return new(n||a)(t.\u0275\u0275directiveInject(i.WMF))};static#t=this.\u0275cmp=t.\u0275\u0275defineComponent({type:a,selectors:[["ngx-chartjs-bar-horizontal"]],decls:1,vars:2,consts:[["type","horizontalBar",3,"data","options"]],template:function(n,e){1&n&&t.\u0275\u0275element(0,"chart",0),2&n&&t.\u0275\u0275property("data",e.data)("options",e.options)},dependencies:[d.ChartComponent],encapsulation:2})}return a})(),D=(()=>{class a{constructor(s){this.theme=s,this.themeSubscription=this.theme.getJsTheme().subscribe(n=>{const e=n.variables,o=n.variables.chartjs;this.data={labels:["Eating","Drinking","Sleeping","Designing","Coding","Cycling","Running"],datasets:[{data:[65,59,90,81,56,55,40],label:"Series A",borderColor:e.danger,backgroundColor:i.c5R.hexToRgbA(e.dangerLight,.5)},{data:[28,48,40,19,96,27,100],label:"Series B",borderColor:e.warning,backgroundColor:i.c5R.hexToRgbA(e.warningLight,.5)}]},this.options={responsive:!0,maintainAspectRatio:!1,scaleFontColor:"white",legend:{labels:{fontColor:o.textColor}},scale:{pointLabels:{fontSize:14,fontColor:o.textColor},gridLines:{color:o.axisLineColor},angleLines:{color:o.axisLineColor}}}})}ngOnDestroy(){this.themeSubscription.unsubscribe()}static#e=this.\u0275fac=function(n){return new(n||a)(t.\u0275\u0275directiveInject(i.WMF))};static#t=this.\u0275cmp=t.\u0275\u0275defineComponent({type:a,selectors:[["ngx-chartjs-radar"]],decls:1,vars:2,consts:[["type","radar",3,"data","options"]],template:function(n,e){1&n&&t.\u0275\u0275element(0,"chart",0),2&n&&t.\u0275\u0275property("data",e.data)("options",e.options)},dependencies:[d.ChartComponent],encapsulation:2})}return a})();const J=[{path:"",component:u,children:[{path:"echarts",component:f},{path:"d3",component:w},{path:"chartjs",component:(()=>{class a{static#e=this.\u0275fac=function(n){return new(n||a)};static#t=this.\u0275cmp=t.\u0275\u0275defineComponent({type:a,selectors:[["ngx-chartjs"]],decls:37,vars:0,consts:[[1,"row"],[1,"col-lg-6"]],template:function(n,e){1&n&&(t.\u0275\u0275elementStart(0,"div",0)(1,"div",1)(2,"nb-card")(3,"nb-card-header"),t.\u0275\u0275text(4,"Pie"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(5,"nb-card-body"),t.\u0275\u0275element(6,"ngx-chartjs-pie"),t.\u0275\u0275elementEnd()()(),t.\u0275\u0275elementStart(7,"div",1)(8,"nb-card")(9,"nb-card-header"),t.\u0275\u0275text(10,"Bar"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(11,"nb-card-body"),t.\u0275\u0275element(12,"ngx-chartjs-bar"),t.\u0275\u0275elementEnd()()(),t.\u0275\u0275elementStart(13,"div",1)(14,"nb-card")(15,"nb-card-header"),t.\u0275\u0275text(16,"Line"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(17,"nb-card-body"),t.\u0275\u0275element(18,"ngx-chartjs-line"),t.\u0275\u0275elementEnd()()(),t.\u0275\u0275elementStart(19,"div",1)(20,"nb-card")(21,"nb-card-header"),t.\u0275\u0275text(22,"Multiple x-axis"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(23,"nb-card-body"),t.\u0275\u0275element(24,"ngx-chartjs-multiple-xaxis"),t.\u0275\u0275elementEnd()()(),t.\u0275\u0275elementStart(25,"div",1)(26,"nb-card")(27,"nb-card-header"),t.\u0275\u0275text(28,"Bar Horizontal"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(29,"nb-card-body"),t.\u0275\u0275element(30,"ngx-chartjs-bar-horizontal"),t.\u0275\u0275elementEnd()()(),t.\u0275\u0275elementStart(31,"div",1)(32,"nb-card")(33,"nb-card-header"),t.\u0275\u0275text(34,"Radar"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(35,"nb-card-body"),t.\u0275\u0275element(36,"ngx-chartjs-radar"),t.\u0275\u0275elementEnd()()()())},dependencies:[i.Asz,i.yKW,i.ndF,j,k,T,F,E,D],styles:["[_nghost-%COMP%]   ngx-chartjs-pie[_ngcontent-%COMP%], [_nghost-%COMP%]   ngx-chartjs-bar[_ngcontent-%COMP%], [_nghost-%COMP%]   ngx-chartjs-line[_ngcontent-%COMP%], [_nghost-%COMP%]   ngx-chartjs-multiple-xaxis[_ngcontent-%COMP%], [_nghost-%COMP%]   ngx-chartjs-bar-horizontal[_ngcontent-%COMP%], [_nghost-%COMP%]   ngx-chartjs-radar[_ngcontent-%COMP%]{display:block;height:var(--card-height-medium);width:100%}[_nghost-%COMP%]   ngx-chartjs-pie[_ngcontent-%COMP%]     chart, [_nghost-%COMP%]   ngx-chartjs-bar[_ngcontent-%COMP%]     chart, [_nghost-%COMP%]   ngx-chartjs-line[_ngcontent-%COMP%]     chart, [_nghost-%COMP%]   ngx-chartjs-multiple-xaxis[_ngcontent-%COMP%]     chart, [_nghost-%COMP%]   ngx-chartjs-bar-horizontal[_ngcontent-%COMP%]     chart, [_nghost-%COMP%]   ngx-chartjs-radar[_ngcontent-%COMP%]     chart{display:block;height:100%;width:100%}"]})}return a})()}]}];let B=(()=>{class a{static#e=this.\u0275fac=function(n){return new(n||a)};static#t=this.\u0275mod=t.\u0275\u0275defineNgModule({type:a});static#n=this.\u0275inj=t.\u0275\u0275defineInjector({imports:[g.Bz.forChild(J),g.Bz]})}return a})(),X=(()=>{class a{static#e=this.\u0275fac=function(n){return new(n||a)};static#t=this.\u0275mod=t.\u0275\u0275defineNgModule({type:a});static#n=this.\u0275inj=t.\u0275\u0275defineInjector({imports:[I.O,B,c.N,h.a4,d.ChartModule,i.zyh]})}return a})()}}]);