(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[654],{2475:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/basic/4-jdbc-batch-item-writer-vs-jpa-item-writer",function(){return r(8386)}])},8386:function(e,t,r){"use strict";r.r(t),r.d(t,{__toc:function(){return o}});var i=r(5893),a=r(2673),n=r(373),s=r(8426);r(9128);var c=r(2643);let o=[{depth:2,value:"JdbcBatchItemWriter vs JpaItemWriter",id:"jdbcbatchitemwriter-vs-jpaitemwriter"},{depth:3,value:"JdbcBatchItemWriter",id:"jdbcbatchitemwriter"},{depth:3,value:"JpaItemWriter",id:"jpaitemwriter"},{depth:2,value:"e.g. JdbcBatchItemWriter",id:"eg-jdbcbatchitemwriter"},{depth:2,value:"e.g. JpaItemWriter",id:"eg-jpaitemwriter"}];function _createMdxContent(e){let t=Object.assign({h2:"h2",h3:"h3",p:"p",pre:"pre",code:"code",span:"span",ul:"ul",li:"li"},(0,c.a)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"jdbcbatchitemwriter-vs-jpaitemwriter",children:"JdbcBatchItemWriter vs JpaItemWriter"}),"\n",(0,i.jsx)(t.h3,{id:"jdbcbatchitemwriter",children:"JdbcBatchItemWriter"}),"\n",(0,i.jsxs)(t.p,{children:["JdbcBatchItemWriter 는 jdbc 를 이용해서 DB에 데이터를 write 하는 Writer 입니다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(t.p,{children:["JdbcBatchItemWriter를 사용하면 Bulk Insert/Update/Delete 가 가능합니다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)(t.p,{children:"예를 들어 아래와 같은 SQL 을 수행 가능합니다."}),"\n",(0,i.jsx)(t.pre,{"data-language":"sql","data-theme":"default",children:(0,i.jsxs)(t.code,{"data-language":"sql","data-theme":"default",children:[(0,i.jsxs)(t.span,{className:"line",children:[(0,i.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"insert into"}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" member(id, "}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"name"}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:", email)"})]}),"\n",(0,i.jsx)(t.span,{className:"line",children:(0,i.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"values"})}),"\n",(0,i.jsxs)(t.span,{className:"line",children:[(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'aaa'"}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'aaa@email.com'"}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"),"})]}),"\n",(0,i.jsxs)(t.span,{className:"line",children:[(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"2"}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'bbb'"}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'bbb@email.com'"}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"),"})]}),"\n",(0,i.jsxs)(t.span,{className:"line",children:[(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"3"}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'ccc'"}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'ccc@email.com'"}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:");"})]})]})}),"\n",(0,i.jsxs)(t.p,{children:["단건처리가 아니가 특정 사이즈 만큼을 한번에 처리할 수 있기 때문에 대용량 데이터 처리에 장점이 있습니다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)(t.h3,{id:"jpaitemwriter",children:"JpaItemWriter"}),"\n",(0,i.jsx)(t.p,{children:"JpaItemWriter 는 JPA의 Entity 단위의 데이터 연산을 합니다."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"EntityManager.persist()"}),"\n",(0,i.jsx)(t.li,{children:"EntityManager.merge()"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"등과 같은 연산을 통해서 위의 메서드가 실행될때마다 매번 단건 insert 를 수행합니다."}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(t.h2,{id:"eg-jdbcbatchitemwriter",children:"e.g. JdbcBatchItemWriter"}),"\n",(0,i.jsx)(t.h2,{id:"eg-jpaitemwriter",children:"e.g. JpaItemWriter"})]})}let d={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,c.a)(),e.components);return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/basic/4-jdbc-batch-item-writer-vs-jpa-item-writer.mdx",route:"/basic/4-jdbc-batch-item-writer-vs-jpa-item-writer",timestamp:1719525638e3,pageMap:[{kind:"Folder",name:"advanced",route:"/advanced",children:[{kind:"MdxPage",name:"chunk-oriented-tasklet--chunk-provider--chunk-processor",route:"/advanced/chunk-oriented-tasklet--chunk-provider--chunk-processor"},{kind:"MdxPage",name:"etc",route:"/advanced/etc"},{kind:"Meta",data:{"chunk-oriented-tasklet--chunk-provider--chunk-processor":" ChunkOrientedTasklet, ChunkProvider, ChunkProcessor",etc:"Etc"}}]},{kind:"MdxPage",name:"advanced",route:"/advanced"},{kind:"Folder",name:"basic",route:"/basic",children:[{kind:"MdxPage",name:"1-setting-hellobatch",route:"/basic/1-setting-hellobatch"},{kind:"MdxPage",name:"2.1-architecture",route:"/basic/2.1-architecture"},{kind:"MdxPage",name:"2.2-spring-batch-essential",route:"/basic/2.2-spring-batch-essential"},{kind:"MdxPage",name:"3-cursor-item-reader-vs-paging-item-reader",route:"/basic/3-cursor-item-reader-vs-paging-item-reader"},{kind:"MdxPage",name:"4-jdbc-batch-item-writer-vs-jpa-item-writer",route:"/basic/4-jdbc-batch-item-writer-vs-jpa-item-writer"},{kind:"MdxPage",name:"csv-read-write-example",route:"/basic/csv-read-write-example"},{kind:"MdxPage",name:"job-config-live-template-creation",route:"/basic/job-config-live-template-creation"},{kind:"Meta",data:{"1-setting-hellobatch":"Setting + Hello,Spring Batch","job-config-live-template-creation":"JobConfig Live Template 만들기","2.1-architecture":"Spring Batch Architecture","2.2-spring-batch-essential":"Spring Batch Essential","csv-read-write-example":"CSV 파일 읽기/쓰기 예제","3-cursor-item-reader-vs-paging-item-reader":"CursorItemReader, PagingItemReader","4-jdbc-batch-item-writer-vs-jpa-item-writer":"JdbcBatchItemWriter vs JpaItemWriter"}}]},{kind:"MdxPage",name:"basic",route:"/basic"},{kind:"MdxPage",name:"index",route:"/"},{kind:"MdxPage",name:"info",route:"/info"},{kind:"Folder",name:"todo",route:"/todo",children:[{kind:"MdxPage",name:"need-to-paging-based-processing",route:"/todo/need-to-paging-based-processing"},{kind:"Meta",data:{"need-to-paging-based-processing":"Need to Paging Based Processing"}}]},{kind:"MdxPage",name:"todo",route:"/todo"},{kind:"Meta",data:{index:"Introduction",basic:"Basic",advanced:"Advanced",todo:"Todo",etc:"기타 개념들",info:"자료모음",contact:{title:"Contact ↗",type:"page",href:"-",newWindow:!0}}}],flexsearch:{codeblocks:!0},title:"4 Jdbc Batch Item Writer Vs Jpa Item Writer",headings:o},pageNextRoute:"/basic/4-jdbc-batch-item-writer-vs-jpa-item-writer",nextraLayout:n.ZP,themeConfig:s.Z};t.default=(0,a.j)(d)},8426:function(e,t,r){"use strict";var i=r(5893);r(7294);let a={logo:(0,i.jsx)("span",{children:"Docs Spring Batch"}),project:{link:"https://github.com/chagchagchag/docs-spring-batch"},docsRepositoryBase:"https://github.com/chagchagchag/docs-spring-batch",footer:{text:"Nextra Docs Template"}};t.Z=a},5789:function(){}},function(e){e.O(0,[774,796,888,179],function(){return e(e.s=2475)}),_N_E=e.O()}]);