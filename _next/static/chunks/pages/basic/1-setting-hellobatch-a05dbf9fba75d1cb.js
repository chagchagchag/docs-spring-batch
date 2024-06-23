(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[501],{1723:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/basic/1-setting-hellobatch",function(){return s(8249)}])},8249:function(e,n,s){"use strict";s.r(n),s.d(n,{__toc:function(){return o}});var i=s(5893),l=s(2673),r=s(373),t=s(8426);s(9128);var a=s(2643);let o=[{depth:2,value:"Setting + Hello,Spring Batch",id:"setting--hellospring-batch"},{depth:2,value:"Setting",id:"setting"},{depth:2,value:"Hello, Spring Batch",id:"hello-spring-batch"},{depth:2,value:"Job, Step",id:"job-step"}];function _createMdxContent(e){let n=Object.assign({h2:"h2",p:"p",ul:"ul",li:"li",code:"code",strong:"strong",pre:"pre",span:"span"},(0,a.a)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"setting--hellospring-batch",children:"Setting + Hello,Spring Batch"}),"\n",(0,i.jsx)(n.h2,{id:"setting",children:"Setting"}),"\n",(0,i.jsx)(n.p,{children:"프로젝트 셋업"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"start.spring.io 에서 lombok, mysql, spring-batch 등을 선택합니다."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Database"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"intellij 내에서 localhost:3306 연결하고, 접속 테스트시 에러나면, Timezone 세팅하는 버튼을 클릭해서 timezone 을 세팅합니다."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"database 생성"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"create database spring_batch;"}),"\n"]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.h2,{id:"hello-spring-batch",children:"Hello, Spring Batch"}),"\n",(0,i.jsx)(n.p,{children:"간단한 HelloJob 을 생성하고 구동함"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Job","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"배치의 실행 단위"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["JobBuilderFactory","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"스프링 배치 설정에서 Bean 으로 등록되어 있는 객체"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["RunIdIncrementer","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Job 을 실행할 때마다 파라미터 ID 를 자동으로 생성해주는 클래스"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:['jobBuilderFactory.get("helloJob")',"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Job name 을 ",(0,i.jsx)(n.code,{children:"helloJob"})," 으로 지었는데, job name 은 Spring Batch 를 실행할 수 있는 Key 역할을 한다."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["start(Step)","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"job 실행시 최초로 실행될 클래스를 지정하는 메서드"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.p,{children:"Step"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Job 의 실행 단위"}),"\n",(0,i.jsx)(n.li,{children:"하나의 Job 은 1개 이상의 Step 을 가질 수 있습니다."}),"\n",(0,i.jsx)(n.li,{children:"Step 역시 Job 처럼 Bean 으로 만들어야 합니다."}),"\n",(0,i.jsx)(n.li,{children:"Job 과 Step 에 대해서는 뒤에서 자세히 다룹니다."}),"\n"]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.p,{children:"chunk 기반 tasklet 실행"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"예제 참고. tasklet 기반 예제를 굳이 여기에 적으면 낭비가 심해서 생략합니다."}),"\n",(0,i.jsx)(n.li,{children:"TODO : 예제 코드 링크 추가할 것"}),"\n"]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsxs)(n.p,{children:["애플리케이션 실행시 ",(0,i.jsx)(n.code,{children:"HelloJob"})," 배치가 실행됩니다. ",(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(n.p,{children:["만약 다른 Job 이 있는 상태에서 이 ",(0,i.jsx)(n.code,{children:"HelloJob"})," 배치를 실행하면 모든 Job 이 실행된다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(n.p,{children:["모든 Job 을 실행하는 것이 아니라 특정 Job 만 실행하려 할 경우 아래 설정을 해준다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Run/Debug Configuration"}),(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Edit Configurations ..."}),"\n",(0,i.jsxs)(n.li,{children:["Build and run > Modify options 클릭","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Java > Program arguments 선택"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Configurations 창에서 아래의 옵션을 입력","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"--spring.batch.job.names={실행할 Job name}"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Apply > Ok"}),"\n"]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsxs)(n.p,{children:["위와 같이 설정해주면 Program Argument 로 지정한 Batch 만 실행하겠다는 설정이되어서 실행 시 Program Argument 로 지정한 Batch 만 실행되게 된다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)(n.p,{children:"그리고 직접 인자값으로 지정하지 않은 Job 까지 실행되는 것을 막으려면 application.yml 파일 내에 아래와 같이 설정해준다."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"spring.batch.job.names: ${job.name.NONE}"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{"data-language":"yaml","data-theme":"default",children:(0,i.jsxs)(n.code,{"data-language":"yaml","data-theme":"default",children:[(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"spring"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"batch"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"job"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"names"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"${job.name:NONE}"})]})]})}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.p,{children:"또는 아래와 같이 설정해준다."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"(Spring Boot Configuration Processor 가 추천해준 속성이다.)"}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"spring.batch.job.enabled: ${spring.batch.job.names:NONE}"})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{"data-language":"yaml","data-theme":"default",children:(0,i.jsxs)(n.code,{"data-language":"yaml","data-theme":"default",children:[(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"spring"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"batch"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"job"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"enabled"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"${spring.batch.job.names:NONE}"})]})]})}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.h2,{id:"job-step",children:"Job, Step"}),"\n",(0,i.jsx)(n.p,{children:"Job"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Batch 의 실행 단위"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Step"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Job 의 실행 단위"}),"\n"]})]})}let c={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,a.a)(),e.components);return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/basic/1-setting-hellobatch.mdx",route:"/basic/1-setting-hellobatch",timestamp:1719182286e3,pageMap:[{kind:"Folder",name:"advanced",route:"/advanced",children:[{kind:"MdxPage",name:"chunk-oriented-tasklet--chunk-provider--chunk-processor",route:"/advanced/chunk-oriented-tasklet--chunk-provider--chunk-processor"},{kind:"MdxPage",name:"etc",route:"/advanced/etc"},{kind:"Meta",data:{"chunk-oriented-tasklet--chunk-provider--chunk-processor":" ChunkOrientedTasklet, ChunkProvider, ChunkProcessor",etc:"Etc"}}]},{kind:"MdxPage",name:"advanced",route:"/advanced"},{kind:"Folder",name:"basic",route:"/basic",children:[{kind:"MdxPage",name:"1-setting-hellobatch",route:"/basic/1-setting-hellobatch"},{kind:"MdxPage",name:"2.1-architecture",route:"/basic/2.1-architecture"},{kind:"MdxPage",name:"csv-read-write-example",route:"/basic/csv-read-write-example"},{kind:"MdxPage",name:"flat-file-item-reader",route:"/basic/flat-file-item-reader"},{kind:"MdxPage",name:"job-config-live-template-creation",route:"/basic/job-config-live-template-creation"},{kind:"Meta",data:{"1-setting-hellobatch":"Setting + Hello,Spring Batch","2.1-architecture":"기본 구조","flat-file-item-reader":"FlatFileItemReader","job-config-live-template-creation":"JobConfig Live Template 만들기","csv-read-write-example":"Csv Read Write Example"}}]},{kind:"MdxPage",name:"basic",route:"/basic"},{kind:"MdxPage",name:"index",route:"/"},{kind:"MdxPage",name:"info",route:"/info"},{kind:"Folder",name:"todo",route:"/todo",children:[{kind:"MdxPage",name:"need-to-paging-based-processing",route:"/todo/need-to-paging-based-processing"},{kind:"Meta",data:{"need-to-paging-based-processing":"Need to Paging Based Processing"}}]},{kind:"MdxPage",name:"todo",route:"/todo"},{kind:"Meta",data:{index:"Introduction",basic:"Basic",advanced:"Advanced",todo:"Todo",etc:"기타 개념들",info:"자료모음",contact:{title:"Contact ↗",type:"page",href:"-",newWindow:!0}}}],flexsearch:{codeblocks:!0},title:"1 Setting Hellobatch",headings:o},pageNextRoute:"/basic/1-setting-hellobatch",nextraLayout:r.ZP,themeConfig:t.Z};n.default=(0,l.j)(c)},8426:function(e,n,s){"use strict";var i=s(5893);s(7294);let l={logo:(0,i.jsx)("span",{children:"Docs Spring Batch"}),project:{link:"https://github.com/chagchagchag/docs-spring-batch"},docsRepositoryBase:"https://github.com/chagchagchag/docs-spring-batch",footer:{text:"Nextra Docs Template"}};n.Z=l},5789:function(){}},function(e){e.O(0,[774,796,888,179],function(){return e(e.s=1723)}),_N_E=e.O()}]);