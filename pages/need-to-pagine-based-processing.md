## 가급적이면 CursorItemReader 기반 처리 대신 PagingItemReader 처리

참고 : https://jiwondev.tistory.com/295

JpaCursorItemReader 를 아무 생각 없이 사용하다가 사용자가 많이 없는데도 Database CPU 사용률이 높다는 알람을 받는 등과 같은 이슈가 발생할 수 있다





배치 처리의 경우 jpa 를 사용할 경우 Bulk 단위 처리가 내부적으로는 잘 적용이 안되며, 어느 정도는 해킹수준의 적용이 필요하기에 가급적이면 JdbcTemplate 을 잘 활용하는 것이 추천됨

