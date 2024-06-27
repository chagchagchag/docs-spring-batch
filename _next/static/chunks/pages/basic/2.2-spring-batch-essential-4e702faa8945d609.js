(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[668],{9884:function(e,r,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/basic/2.2-spring-batch-essential",function(){return s(3943)}])},3943:function(e,r,s){"use strict";s.r(r),s.d(r,{__toc:function(){return d},default:function(){return p}});var t=s(5893),n=s(2673),i=s(373),a=s(8426);s(9128);var c=s(2643),o={src:"/docs-spring-batch/_next/static/media/abstract-item-stream-item-reader.22564182.png",height:498,width:991,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAAAAACWpiEsAAAAJElEQVR42gVAAQ0AMAiif+ALesHBmZ7YiFXaBKpmkwJr7Xn/ADagH2TscRdqAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:4},l={src:"/docs-spring-batch/_next/static/media/abstract-item-stream-item-writer.d7996438.png",height:506,width:1050,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAAAAACWpiEsAAAAIklEQVR42gVABw0AMAzCv2FOF1jQXd5arGK2wozDG6wusj43Nh9rfuftVgAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:4};let d=[{depth:2,value:"Spring Batch Essential",id:"spring-batch-essential"},{depth:2,value:"참고자료",id:"참고자료"},{depth:2,value:"Tasklet vs Chunk Based Processing",id:"tasklet-vs-chunk-based-processing"},{depth:2,value:"Job, Step, Reader, Processor, Writer",id:"job-step-reader-processor-writer"},{depth:2,value:"JobParameters",id:"jobparameters"},{depth:2,value:"AbstractItemStreamItemReader",id:"abstractitemstreamitemreader"},{depth:2,value:"AbstractItemStreamItemWriter",id:"abstractitemstreamitemwriter"}];function _createMdxContent(e){let r=Object.assign({h2:"h2",ul:"ul",li:"li",a:"a",p:"p",blockquote:"blockquote",strong:"strong",code:"code",pre:"pre",span:"span",img:"img"},(0,c.a)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h2,{id:"spring-batch-essential",children:"Spring Batch Essential"}),"\n",(0,t.jsx)(r.h2,{id:"참고자료",children:"참고자료"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://khj93.tistory.com/entry/Spring-Batch%EB%9E%80-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B3%A0-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0",children:"Spring Batch란? 이해하고 사용하기"})}),"\n"]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(r.h2,{id:"tasklet-vs-chunk-based-processing",children:"Tasklet vs Chunk Based Processing"}),"\n",(0,t.jsx)(r.p,{children:"Tasklet 기반 처리"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"배치 처리 과정의 구조가 단순할 경우에 사용합니다."}),"\n",(0,t.jsx)(r.li,{children:"대용량 데이터 처리 시에 데이터를 여러 덩어리로 나눠서 처리하기에는 복잡한 구조입니다."}),"\n",(0,t.jsx)(r.li,{children:"대용량 데이터 처리를 할 경우 시스템의 자원이 부족하게 될 수 있다는 단점이 있습니다."}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"Chunk 기반 처리"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"ItemReader, ItemProcessor, ItemWriter 를 이용해서 데이터를 처리합니다."}),"\n",(0,t.jsx)(r.li,{children:"이렇게 ItemReader, ItemProcessor, ItemWriter 를 이용한 데이터 처리를 Chunk Based Processing 이라고 부릅니다."}),"\n",(0,t.jsx)(r.li,{children:"대용량 데이터 처리 시에 데이터를 Chunk 단위로 나누고 이 Chunk 를 Paging 기반으로 여러 단계로 나누어 처리합니다."}),"\n",(0,t.jsx)(r.li,{children:"데용량 데이터 처리 시에 시스템의 자원이 부족해지는 현상 없이 안정적으로 처리할 수 있다는 장점이 있습니다."}),"\n",(0,t.jsx)(r.li,{children:"e.g. 10만개의 데이터를 10000 size 의 chunk 단위로 처리하는 경우"}),"\n"]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(r.h2,{id:"job-step-reader-processor-writer",children:"Job, Step, Reader, Processor, Writer"}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsx)(r.p,{children:"!!!정리 예정"}),"\n"]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(r.h2,{id:"jobparameters",children:"JobParameters"}),"\n",(0,t.jsxs)(r.p,{children:["배치 실행시 필요한 파라미터를 주입할 때 JobParameters 객체를 사용합니다.",(0,t.jsx)("br",{})]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"파라미터 접근"}),(0,t.jsx)("br",{})]}),"\n",(0,t.jsx)(r.p,{children:"파라미터 접근 시에는 아래의 두 방식으로 접근 가능합니다"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["JobParameters 를 이용한 파라미터 접근","\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["e.g. ",(0,t.jsx)(r.code,{children:"String parameter = jobParameters.getString(key, defaultValue)"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["Spring EL (Expression Language) 로 접근","\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["e.g. ",(0,t.jsx)(r.code,{children:'@Value("#{jobParameters[key]}")'})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"파라미터 주입"}),(0,t.jsx)("br",{})]}),"\n",(0,t.jsx)(r.p,{children:"파라미터를 주입하는 방식은 아래와 같습니다."}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["Intellij 에서 실행 또는 jar 파일 실행시 Program Argument 를 ",(0,t.jsx)(r.code,{children:"-{파라미터명}"})," 으로 전달하는 방식"]}),"\n",(0,t.jsx)(r.li,{children:"Controller 및 기타 엔드포인트에서 직접 인자를 전달하는 방식"}),"\n"]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(r.p,{children:"e.g. 주입된 Job 파라미터를 Spring EL 을 이용해서 읽어들이는 예제입니다."}),"\n",(0,t.jsx)(r.pre,{"data-language":"java","data-theme":"default",children:(0,t.jsxs)(r.code,{"data-language":"java","data-theme":"default",children:[(0,t.jsxs)(r.span,{className:"line",children:[(0,t.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:"@"}),(0,t.jsx)(r.span,{style:{color:"var(--shiki-token-keyword)"},children:"Bean"})]}),"\n",(0,t.jsxs)(r.span,{className:"line",children:[(0,t.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:"@"}),(0,t.jsx)(r.span,{style:{color:"var(--shiki-token-keyword)"},children:"JobScope"})]}),"\n",(0,t.jsxs)(r.span,{className:"line",children:[(0,t.jsx)(r.span,{style:{color:"var(--shiki-token-keyword)"},children:"public"}),(0,t.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(r.span,{style:{color:"var(--shiki-token-keyword)"},children:"Step"}),(0,t.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(r.span,{style:{color:"var(--shiki-token-function)"},children:"chunkBaseStep(@"}),(0,t.jsx)(r.span,{style:{color:"var(--shiki-token-keyword)"},children:"Value"}),(0,t.jsx)(r.span,{style:{color:"var(--shiki-token-function)"},children:"("}),(0,t.jsx)(r.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"#{jobParameters[orderId]}"'}),(0,t.jsx)(r.span,{style:{color:"var(--shiki-token-function)"},children:") "}),(0,t.jsx)(r.span,{style:{color:"var(--shiki-token-keyword)"},children:"String"}),(0,t.jsx)(r.span,{style:{color:"var(--shiki-token-function)"},children:" orderId)"}),(0,t.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:"{"})]}),"\n",(0,t.jsxs)(r.span,{className:"line",children:[(0,t.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,t.jsx)(r.span,{style:{color:"var(--shiki-token-keyword)"},children:"String"}),(0,t.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:" orderId "}),(0,t.jsx)(r.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,t.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(r.span,{style:{color:"var(--shiki-token-constant)"},children:"StringUtils"}),(0,t.jsx)(r.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,t.jsx)(r.span,{style:{color:"var(--shiki-token-function)"},children:"isNotEmpty"}),(0,t.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:"(orderId) "})]}),"\n",(0,t.jsxs)(r.span,{className:"line",children:[(0,t.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,t.jsx)(r.span,{style:{color:"var(--shiki-token-keyword)"},children:"?"}),(0,t.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(r.span,{style:{color:"var(--shiki-token-constant)"},children:"Long"}),(0,t.jsx)(r.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,t.jsx)(r.span,{style:{color:"var(--shiki-token-function)"},children:"parseLong"}),(0,t.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:"(orderId)"})]}),"\n",(0,t.jsxs)(r.span,{className:"line",children:[(0,t.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,t.jsx)(r.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,t.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(r.span,{style:{color:"var(--shiki-token-keyword)"},children:"-"}),(0,t.jsx)(r.span,{style:{color:"var(--shiki-token-constant)"},children:"1L"}),(0,t.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,t.jsx)(r.span,{className:"line",children:(0,t.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:"    "})}),"\n",(0,t.jsxs)(r.span,{className:"line",children:[(0,t.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,t.jsx)(r.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,t.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(r.span,{style:{color:"var(--shiki-token-constant)"},children:"stepBuilderFactory"}),(0,t.jsx)(r.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,t.jsx)(r.span,{style:{color:"var(--shiki-token-function)"},children:"get"}),(0,t.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,t.jsx)(r.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"somethingStep"'}),(0,t.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,t.jsxs)(r.span,{className:"line",children:[(0,t.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,t.jsx)(r.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,t.jsx)(r.span,{style:{color:"var(--shiki-token-keyword)"},children:"<"}),(0,t.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:"String"}),(0,t.jsx)(r.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,t.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:"String"}),(0,t.jsx)(r.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,t.jsx)(r.span,{style:{color:"var(--shiki-token-function)"},children:"chunk(CHUNK_SIZE)"})]}),"\n",(0,t.jsxs)(r.span,{className:"line",children:[(0,t.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,t.jsx)(r.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,t.jsx)(r.span,{style:{color:"var(--shiki-token-function)"},children:"reader"}),(0,t.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,t.jsx)(r.span,{style:{color:"var(--shiki-token-function)"},children:"itemReader(orderId)"}),(0,t.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,t.jsxs)(r.span,{className:"line",children:[(0,t.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,t.jsx)(r.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,t.jsx)(r.span,{style:{color:"var(--shiki-token-function)"},children:"processor"}),(0,t.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,t.jsx)(r.span,{style:{color:"var(--shiki-token-function)"},children:"itemProcessor()"}),(0,t.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,t.jsxs)(r.span,{className:"line",children:[(0,t.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,t.jsx)(r.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,t.jsx)(r.span,{style:{color:"var(--shiki-token-function)"},children:"writer"}),(0,t.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,t.jsx)(r.span,{style:{color:"var(--shiki-token-function)"},children:"itemWriter()"}),(0,t.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,t.jsxs)(r.span,{className:"line",children:[(0,t.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,t.jsx)(r.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,t.jsx)(r.span,{style:{color:"var(--shiki-token-function)"},children:"build"}),(0,t.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:"();"})]}),"\n",(0,t.jsx)(r.span,{className:"line",children:(0,t.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(r.h2,{id:"abstractitemstreamitemreader",children:"AbstractItemStreamItemReader"}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:["참고 - ",(0,t.jsx)(r.a,{href:"https://docs.spring.io/spring-batch/docs/current/api/org/springframework/batch/item/support/AbstractItemStreamItemReader.html",children:"docs.spring.io/.../AbstractItemStreamItemReader"})]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"몇몇 클래스는 UML 에서 생략했습니다."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["AbstractStreamItemReader 는 ItemStream interface, ItemReader interface 를 implements 하고 있는 abstract 클래스입니다. 주로 잘 짜여진 Spring 등과 같은 프레임워크에서는 abstract 클래스로 기본틀 역할을 하는 클래스를 제공하는데, AbstractItemStreamItemReader 클래스 역시 필요한 기본적인 구현이 갖춰져 있는 ",(0,t.jsx)(r.strong,{children:"기본 틀"})," 역할을 합니다.",(0,t.jsx)("br",{})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{placeholder:"blur",src:o})}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"AbstractItemStreamItemReader 를 extends 하는 대표적인 구현체 클래스들"}),(0,t.jsx)("br",{})]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://docs.spring.io/spring-batch/docs/current/api/org/springframework/batch/item/database/JdbcCursorItemReader.html",children:"JdbcCursorItemReader"}),", ",(0,t.jsx)(r.a,{href:"https://docs.spring.io/spring-batch/docs/current/api/org/springframework/batch/item/database/JpaCursorItemReader.html",children:"JpaCursorItemReader"})]}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://docs.spring.io/spring-batch/docs/current/api/org/springframework/batch/item/kafka/KafkaItemReader.html",children:"KafkaItemReader"})}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://docs.spring.io/spring-batch/docs/current/api/org/springframework/batch/item/support/AbstractItemCountingItemStreamItemReader.html",children:"AbstractItemCoutingItemStreamItemReader"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["대표적으로 FlatFileItemReader 가 ",(0,t.jsx)(r.a,{href:"https://docs.spring.io/spring-batch/docs/current/api/org/springframework/batch/item/support/AbstractItemCountingItemStreamItemReader.html",children:"AbstractItemCoutingItemStreamItemReader"})," 을 extends 하고 있습니다."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"JpaCursorItemReader, JdbcCursorItemReader"}),(0,t.jsx)("br",{})]}),"\n",(0,t.jsxs)(r.p,{children:["그리고 세부적으로는 JpaCursorItemReader, JdbcCursorItemReader 와 같은 하위 구현체들이 존재하며, 이 구현체들은 spring-batch 에서 Jpa, Jdbc 를 통한 Data read 연산을 효율적으로 할 수 있도록 하는 연산을 제공합니다.",(0,t.jsx)("br",{})]}),"\n",(0,t.jsx)(r.h2,{id:"abstractitemstreamitemwriter",children:"AbstractItemStreamItemWriter"}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:["참고 : ",(0,t.jsx)(r.a,{href:"https://docs.spring.io/spring-batch/docs/current/api/org/springframework/batch/item/support/AbstractItemStreamItemWriter.html",children:"AbstractItemStreamItemWriter"})]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"몇몇 클래스는 UML 에서 생략했습니다."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{placeholder:"blur",src:l})})]})}let h={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:r}=Object.assign({},(0,c.a)(),e.components);return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/basic/2.2-spring-batch-essential.mdx",route:"/basic/2.2-spring-batch-essential",pageMap:[{kind:"Folder",name:"advanced",route:"/advanced",children:[{kind:"MdxPage",name:"chunk-oriented-tasklet--chunk-provider--chunk-processor",route:"/advanced/chunk-oriented-tasklet--chunk-provider--chunk-processor"},{kind:"MdxPage",name:"etc",route:"/advanced/etc"},{kind:"Meta",data:{"chunk-oriented-tasklet--chunk-provider--chunk-processor":" ChunkOrientedTasklet, ChunkProvider, ChunkProcessor",etc:"Etc"}}]},{kind:"MdxPage",name:"advanced",route:"/advanced"},{kind:"Folder",name:"basic",route:"/basic",children:[{kind:"MdxPage",name:"1-setting-hellobatch",route:"/basic/1-setting-hellobatch"},{kind:"MdxPage",name:"2.1-architecture",route:"/basic/2.1-architecture"},{kind:"MdxPage",name:"2.2-spring-batch-essential",route:"/basic/2.2-spring-batch-essential"},{kind:"MdxPage",name:"3-cursor-item-reader-vs-paging-item-reader",route:"/basic/3-cursor-item-reader-vs-paging-item-reader"},{kind:"MdxPage",name:"4-jdbc-batch-item-writer-vs-jpa-item-writer",route:"/basic/4-jdbc-batch-item-writer-vs-jpa-item-writer"},{kind:"MdxPage",name:"csv-read-write-example",route:"/basic/csv-read-write-example"},{kind:"MdxPage",name:"flat-file-item-reader",route:"/basic/flat-file-item-reader"},{kind:"MdxPage",name:"job-config-live-template-creation",route:"/basic/job-config-live-template-creation"},{kind:"Meta",data:{"1-setting-hellobatch":"Setting + Hello,Spring Batch","job-config-live-template-creation":"JobConfig Live Template 만들기","2.1-architecture":"기본 구조","csv-read-write-example":"Csv Read, Write 예제","2.2-spring-batch-essential":"2.2 Spring Batch Essential","3-cursor-item-reader-vs-paging-item-reader":"3 Cursor Item Reader Vs Paging Item Reader","4-jdbc-batch-item-writer-vs-jpa-item-writer":"4 Jdbc Batch Item Writer Vs Jpa Item Writer","flat-file-item-reader":"Flat File Item Reader"}}]},{kind:"MdxPage",name:"basic",route:"/basic"},{kind:"MdxPage",name:"index",route:"/"},{kind:"MdxPage",name:"info",route:"/info"},{kind:"Folder",name:"todo",route:"/todo",children:[{kind:"MdxPage",name:"need-to-paging-based-processing",route:"/todo/need-to-paging-based-processing"},{kind:"Meta",data:{"need-to-paging-based-processing":"Need to Paging Based Processing"}}]},{kind:"MdxPage",name:"todo",route:"/todo"},{kind:"Meta",data:{index:"Introduction",basic:"Basic",advanced:"Advanced",todo:"Todo",etc:"기타 개념들",info:"자료모음",contact:{title:"Contact ↗",type:"page",href:"-",newWindow:!0}}}],flexsearch:{codeblocks:!0},title:"2.2 Spring Batch Essential",headings:d},pageNextRoute:"/basic/2.2-spring-batch-essential",nextraLayout:i.ZP,themeConfig:a.Z};var p=(0,n.j)(h)},8426:function(e,r,s){"use strict";var t=s(5893);s(7294);let n={logo:(0,t.jsx)("span",{children:"Docs Spring Batch"}),project:{link:"https://github.com/chagchagchag/docs-spring-batch"},docsRepositoryBase:"https://github.com/chagchagchag/docs-spring-batch",footer:{text:"Nextra Docs Template"}};r.Z=n},5789:function(){}},function(e){e.O(0,[774,796,888,179],function(){return e(e.s=9884)}),_N_E=e.O()}]);