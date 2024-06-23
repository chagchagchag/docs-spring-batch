(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[14],{8537:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/advanced/etc",function(){return n(5553)}])},5553:function(e,t,n){"use strict";n.r(t),n.d(t,{__toc:function(){return d}});var o=n(5893),a=n(2673),i=n(373),c=n(8426);n(9128);var r=n(2643);let d=[{depth:2,value:"etc - 기타 지식들",id:"etc---기타-지식들"},{depth:2,value:"JobRepository",id:"jobrepository"}];function _createMdxContent(e){let t=Object.assign({h2:"h2",blockquote:"blockquote",p:"p",a:"a",code:"code",strong:"strong",ul:"ul",li:"li"},(0,r.a)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"etc---기타-지식들",children:"etc - 기타 지식들"}),"\n",(0,o.jsx)(t.h2,{id:"jobrepository",children:"JobRepository"}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:["참고자료 : ",(0,o.jsx)(t.a,{href:"https://ojt90902.tistory.com/775?category=959720",children:"Spring Batch : JobRepository"})]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["JobRepository 는 Database 에 Job, Step 에 대한 Instance 또는 Execution Instance, Context 그리고 Parameter 들을 Database 에 저장하거나, 수정, 조회, 삭제를 하는 역할을 담당합니다.",(0,o.jsx)("br",{})]}),"\n",(0,o.jsxs)(t.p,{children:["우리가 JobRepository 를 선언하지도 않았고, ",(0,o.jsx)(t.code,{children:"@EnableJpaRepositories"})," 에 직접 등록하지도 않았는데, JobRepository 를 사용할 수 있는 이유는 ",(0,o.jsx)(t.code,{children:"@EnableBatchProcessing"})," 애노테이션 덕분입니다. ",(0,o.jsx)(t.code,{children:"@EnableBatchProcessing"})," 애노테이션은 JobRepository 를 스프링 빈으로 등록합니다.",(0,o.jsx)("br",{})]}),"\n",(0,o.jsxs)(t.p,{children:["만약 사용자 정의 JobRepository 를 사용하려 한다면, BatchConfigurer/BasicBatchConfigurer 를 implements 또는 extends 해서 사용하면 됩니다. JobRepository 는 내장 메모리(embedded), DB 용도로 설정 역시 따로 지정할 수 있습니다.",(0,o.jsx)("br",{})]}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"트랜잭션"}),(0,o.jsx)("br",{})]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["JobRepository 는 트랜잭션을 AOP 기술로 처리해주는데, 스프링의 ",(0,o.jsx)(t.code,{children:"@Transactional"})," 이 아니라, Batch 내에서의 트랜잭션을 처리하는 별도의 AOP가 있습니다."]}),"\n",(0,o.jsx)(t.li,{children:"트랜잭션 격리 수준은 Serializable (=가장 엄격한 수준)이며, 더 낮은 격리 수준으로 지정하는 것 역시 가능합니다."}),"\n",(0,o.jsx)(t.li,{children:"메타테이블의 Prefix (접두사) 를 벼경할 수 있습니다. 기본 값은 BATCH 입니다."}),"\n"]}),"\n",(0,o.jsx)("br",{})]})}let s={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,r.a)(),e.components);return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/advanced/etc.mdx",route:"/advanced/etc",timestamp:1719182286e3,pageMap:[{kind:"Folder",name:"advanced",route:"/advanced",children:[{kind:"MdxPage",name:"chunk-oriented-tasklet--chunk-provider--chunk-processor",route:"/advanced/chunk-oriented-tasklet--chunk-provider--chunk-processor"},{kind:"MdxPage",name:"etc",route:"/advanced/etc"},{kind:"Meta",data:{"chunk-oriented-tasklet--chunk-provider--chunk-processor":" ChunkOrientedTasklet, ChunkProvider, ChunkProcessor",etc:"Etc"}}]},{kind:"MdxPage",name:"advanced",route:"/advanced"},{kind:"Folder",name:"basic",route:"/basic",children:[{kind:"MdxPage",name:"1-setting-hellobatch",route:"/basic/1-setting-hellobatch"},{kind:"MdxPage",name:"2.1-architecture",route:"/basic/2.1-architecture"},{kind:"MdxPage",name:"flat-file-item-reader",route:"/basic/flat-file-item-reader"},{kind:"MdxPage",name:"job-config-live-template-creation",route:"/basic/job-config-live-template-creation"},{kind:"Meta",data:{"1-setting-hellobatch":"Setting + Hello,Spring Batch","2.1-architecture":"기본 구조","flat-file-item-reader":"FlatFileItemReader","job-config-live-template-creation":"JobConfig Live Template 만들기"}}]},{kind:"MdxPage",name:"basic",route:"/basic"},{kind:"MdxPage",name:"index",route:"/"},{kind:"MdxPage",name:"info",route:"/info"},{kind:"Folder",name:"todo",route:"/todo",children:[{kind:"MdxPage",name:"need-to-paging-based-processing",route:"/todo/need-to-paging-based-processing"},{kind:"Meta",data:{"need-to-paging-based-processing":"Need to Paging Based Processing"}}]},{kind:"MdxPage",name:"todo",route:"/todo"},{kind:"Meta",data:{index:"Introduction",basic:"Basic",advanced:"Advanced",todo:"Todo",etc:"기타 개념들",info:"자료모음",contact:{title:"Contact ↗",type:"page",href:"-",newWindow:!0}}}],flexsearch:{codeblocks:!0},title:"Etc",headings:d},pageNextRoute:"/advanced/etc",nextraLayout:i.ZP,themeConfig:c.Z};t.default=(0,a.j)(s)},8426:function(e,t,n){"use strict";var o=n(5893);n(7294);let a={logo:(0,o.jsx)("span",{children:"Docs Spring Batch"}),project:{link:"https://github.com/chagchagchag/docs-spring-batch"},docsRepositoryBase:"https://github.com/chagchagchag/docs-spring-batch",footer:{text:"Nextra Docs Template"}};t.Z=a},5789:function(){}},function(e){e.O(0,[774,796,888,179],function(){return e(e.s=8537)}),_N_E=e.O()}]);