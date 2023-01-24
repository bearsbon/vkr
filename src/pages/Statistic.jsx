export default function Statistic() {
  return (
    <div>
      <h1 className="page_h1">Статистика</h1>
      <div className="">
        <div className="stat_item bg-white w-[350px] h-[225px] rounded-xl p-7 relative">
          <svg className="scale-150" width="20" height="16" viewBox="0 0 21 17" fill="#333">
            <path d="M0 17V14.4267C0 13.788 0.142534 13.2085 0.427602 12.6884C0.71267 12.1683 1.1086 11.7805 1.61538 11.525C2.77149 10.941 3.81278 10.5212 4.73925 10.2657C5.66572 10.0102 6.61991 9.88245 7.60181 9.88245C8.58371 9.88245 9.53394 10.0102 10.4525 10.2657C11.371 10.5212 12.4084 10.941 13.5645 11.525C14.0713 11.7805 14.4712 12.1683 14.7641 12.6884C15.0571 13.2085 15.2036 13.788 15.2036 14.4267V17H0ZM16.629 17V14.4267C16.629 13.277 16.3756 12.3325 15.8688 11.5934C15.362 10.8543 14.6968 10.2566 13.8733 9.80032C14.9661 9.94632 15.9955 10.1608 16.9615 10.4436C17.9276 10.7265 18.7115 11.0505 19.3133 11.4155C19.836 11.7622 20.2477 12.1911 20.5486 12.7021C20.8495 13.2131 21 13.788 21 14.4267V17H16.629ZM7.60181 8.21256C6.55656 8.21256 5.70136 7.82931 5.0362 7.0628C4.37104 6.2963 4.03846 5.31079 4.03846 4.10628C4.03846 2.90177 4.37104 1.91626 5.0362 1.14976C5.70136 0.383253 6.55656 0 7.60181 0C8.64706 0 9.50226 0.383253 10.1674 1.14976C10.8326 1.91626 11.1652 2.90177 11.1652 4.10628C11.1652 5.31079 10.8326 6.2963 10.1674 7.0628C9.50226 7.82931 8.64706 8.21256 7.60181 8.21256ZM16.1538 4.10628C16.1538 5.31079 15.8213 6.2963 15.1561 7.0628C14.491 7.82931 13.6357 8.21256 12.5905 8.21256C12.4163 8.21256 12.2223 8.19887 12.0085 8.1715C11.7947 8.14412 11.6007 8.09394 11.4265 8.02094C11.8066 7.56468 12.0956 7.00349 12.2936 6.33736C12.4915 5.67123 12.5905 4.92754 12.5905 4.10628C12.5905 3.28502 12.4915 2.55958 12.2936 1.92995C12.0956 1.30032 11.8066 0.720881 11.4265 0.191627C11.6007 0.136876 11.7947 0.0912509 12.0085 0.0547506C12.2223 0.0182503 12.4163 0 12.5905 0C13.6357 0 14.491 0.383253 15.1561 1.14976C15.8213 1.91626 16.1538 2.90177 16.1538 4.10628ZM1.42534 15.3575H13.7783V14.4267C13.7783 14.1347 13.7031 13.8519 13.5526 13.5781C13.4022 13.3043 13.2161 13.1127 12.9943 13.0032C11.8541 12.4192 10.8959 12.0268 10.1199 11.8261C9.34389 11.6253 8.50453 11.525 7.60181 11.525C6.6991 11.525 5.85577 11.6253 5.07183 11.8261C4.2879 12.0268 3.32579 12.4192 2.18552 13.0032C1.9638 13.1127 1.78167 13.3043 1.63914 13.5781C1.49661 13.8519 1.42534 14.1347 1.42534 14.4267V15.3575ZM7.60181 6.57005C8.21946 6.57005 8.7302 6.33736 9.13405 5.87198C9.5379 5.4066 9.73982 4.81804 9.73982 4.10628C9.73982 3.39453 9.5379 2.80596 9.13405 2.34058C8.7302 1.8752 8.21946 1.64251 7.60181 1.64251C6.98416 1.64251 6.47342 1.8752 6.06957 2.34058C5.66572 2.80596 5.4638 3.39453 5.4638 4.10628C5.4638 4.81804 5.66572 5.4066 6.06957 5.87198C6.47342 6.33736 6.98416 6.57005 7.60181 6.57005Z" />
          </svg>
          <div className="absolute bottom-5">
            <div>236</div>
            <div>Всего человек в базе</div>
          </div>
        </div>
      </div>
    </div>
  );
}
