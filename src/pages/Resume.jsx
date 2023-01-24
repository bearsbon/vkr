import React from 'react';
import ava from './../images/mark-cukerberg.jpg';

export default function Resume() {
  const workExp = [
    { years: '2004-2007', location: 'Лукойл', position: 'Экономист' },
    { years: '2007-20010', location: 'Газпром', position: 'Бухгалтер' },
    { years: '2010-2020', location: 'Роснефть', position: 'HR менеджер' },
  ];

  const edExp = [
    {
      years: '2004-2007',
      university: 'Уральский Федеральный университет',
      specialisation: 'Бакалавриат по специальности маркетинг',
    },
    {
      years: '2007-2010',
      university: 'Уральский Федеральный университет',
      specialisation: 'Бакалавриат по специальности маркетинг',
    },
  ];
  const exp = workExp.map((item) => (
    <div key={item} className="education__wrapper">
      <div className="flex ml-10">
        <div className="bg-[#2F89FE] w-[11px] h-[11px] rounded-full mt-[8px] mr-[18px]"></div>
        <span className="year font-semibold text-lg text-[#2F89FE]">{item.years}</span>
      </div>
      <div>
        <div className=" font-semibold text-lg text-[#2F89FE]">{item.location}</div>
        <div className=" font-medium text-m">{item.position}</div>
      </div>
    </div>
  ));

  const ed = edExp.map((item) => (
    <div key={item} className="education__wrapper">
      <div className="flex ml-10">
        <div className="bg-[#2F89FE] w-[11px] h-[11px] rounded-full mt-[8px] mr-[18px]"></div>
        <span className="year font-semibold text-lg text-[#2F89FE]">{item.years}</span>
      </div>
      <div>
        <div className=" font-semibold text-lg text-[#2F89FE]">{item.university}</div>
        <div className=" font-medium text-m">{item.specialisation}</div>
      </div>
    </div>
  ));

  return (
    <div className="text-[#303439] ">
      <h1 className="page_h1">Статистика</h1>
      <button className="bg-sky-700 text-white px-5 py-2 rounded-lg active:scale-[.98] block ml-auto">
        Редактировать
      </button>
      <div className="content overflow-scroll overflow-x-hidden mt-4">
        <div className="left mx-auto">
          <img src={ava} alt="ava" class="mx-auto w-[250px] rounded-full" />

          <div className="resume__h3 ">Обо мне</div>
          <div className="font-medium leading-[40px] text-[19px]">
            <span className=" text-sky-800 mr-5 font-semibold ">Возраст:</span>27
          </div>
          <div className="font-medium leading-[40px] text-[19px]">
            <span className=" text-sky-800 mr-5 font-semibold">Пол:</span>Мужской
          </div>
          <div className="font-medium leading-[40px] text-[19px]">
            <span className=" text-sky-800 mr-5 font-semibold">Должность:</span>Менеджер
          </div>
          <div className="font-medium leading-[40px] text-[19px]">
            <span className=" text-sky-800 mr-5 font-semibold">Стаж:</span>5
          </div>

          <div className="resume__h3 ">Контакты</div>
          <div className="font-medium mt-4 text-[18px] flex">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" class="mr-4 w-54">
              <circle cx="16" cy="16" r="15" stroke="#2F89FE" stroke-width="2" />
              <path
                d="M24.69 25.9309C22.4464 25.9309 20.2165 25.3792 18.0004 24.2757C15.7843 23.1723 13.7935 21.7378 12.028 19.9723C10.2624 18.2068 8.82796 16.216 7.72451 13.9999C6.62106 11.7838 6.06934 9.55391 6.06934 7.31023C6.06934 6.9608 6.18888 6.66655 6.42796 6.42747C6.66704 6.18839 6.96129 6.06885 7.31072 6.06885H11.1728C11.4303 6.06885 11.6555 6.1562 11.8486 6.33092C12.0418 6.50563 12.1659 6.74011 12.2211 7.03436L12.9659 10.5102C13.0027 10.7677 12.9981 11.0022 12.9521 11.2137C12.9061 11.4252 12.8096 11.6045 12.6624 11.7516L9.90382 14.5378C10.9337 16.2482 12.0877 17.7378 13.3659 19.0068C14.644 20.2757 16.0923 21.3516 17.7107 22.2344L20.3314 19.5309C20.5153 19.3286 20.7268 19.1861 20.9659 19.1033C21.205 19.0206 21.444 19.0068 21.6831 19.062L24.9659 19.7792C25.2418 19.8344 25.4716 19.9723 25.6555 20.193C25.8395 20.4137 25.9314 20.6711 25.9314 20.9654V24.6895C25.9314 25.039 25.8119 25.3332 25.5728 25.5723C25.3337 25.8114 25.0395 25.9309 24.69 25.9309ZM9.07623 13.0206L11.3107 10.7585L10.6762 7.72402H7.72451C7.72451 8.44126 7.83485 9.22747 8.05554 10.0826C8.27623 10.9378 8.61646 11.9171 9.07623 13.0206ZM19.2555 23.0344C20.0096 23.3838 20.828 23.6688 21.7107 23.8895C22.5935 24.1102 23.4486 24.239 24.2762 24.2757V21.324L21.4349 20.7447L19.2555 23.0344Z"
                fill="#2F89FE"
              />
            </svg>
            +7(999)888-22-11
          </div>
          <div className="font-medium mt-4 text-[18px] flex">
            <svg width="25" height="20" viewBox="0 0 25 20" fill="none" class="ml-1 mr-4 w-54">
              <path
                d="M1.875 20C1.375 20 0.9375 19.8125 0.5625 19.4375C0.1875 19.0625 0 18.625 0 18.125V1.875C0 1.375 0.1875 0.9375 0.5625 0.5625C0.9375 0.1875 1.375 0 1.875 0H23.125C23.625 0 24.0625 0.1875 24.4375 0.5625C24.8125 0.9375 25 1.375 25 1.875V18.125C25 18.625 24.8125 19.0625 24.4375 19.4375C24.0625 19.8125 23.625 20 23.125 20H1.875ZM12.5 10.5625L1.875 3.59375V18.125H23.125V3.59375L12.5 10.5625ZM12.5 8.6875L23 1.875H2.03125L12.5 8.6875ZM1.875 3.59375V1.875V18.125V3.59375Z"
                fill="#2F89FE"
              />
            </svg>
            zuckerberg@gmail.com
          </div>
        </div>

        <div className="right ml-3">
          <h3 className="text-center font-bold text-[44px] text-[#303439] my-5">
            Цукерберг Марк Анатольевич
          </h3>
          <div className="border__box">
            <div className="flex leading-10 text-[32px] text-[#2F89FE] font-semibold ">
              <svg width="38" height="38" viewBox="0 0 38 38" fill="none" class="mr-4 w-54">
                <circle cx="19" cy="19" r="18" stroke="#2F89FE" stroke-width="2" />
                <path
                  d="M9.40822 29.1066C8.36695 29.1066 7.48188 28.7397 6.75299 28.0061C6.02411 27.2724 5.65967 26.3816 5.65967 25.3335C5.65967 24.2854 6.02411 23.3946 6.75299 22.6609C7.48188 21.9273 8.36695 21.5605 9.40822 21.5605C9.6373 21.5605 9.86637 21.5814 10.0955 21.6233C10.3245 21.6653 10.5536 21.7282 10.7827 21.812L15.7808 14.9262C15.3642 14.465 15.031 13.9462 14.7811 13.3698C14.5312 12.7934 14.4063 12.1698 14.4063 11.499C14.4063 10.1155 14.8957 8.93123 15.8745 7.94604C16.8533 6.96085 18.0299 6.46826 19.4043 6.46826C20.7788 6.46826 21.9554 6.96085 22.9342 7.94604C23.913 8.93123 24.4024 10.1155 24.4024 11.499C24.4024 12.1698 24.2775 12.7934 24.0276 13.3698C23.7777 13.9462 23.4445 14.465 23.0279 14.9262L28.026 21.8434C28.2551 21.7386 28.479 21.6653 28.6976 21.6233C28.9163 21.5814 29.1506 21.5605 29.4005 21.5605C30.4417 21.5605 31.3268 21.9273 32.0557 22.6609C32.7846 23.3946 33.149 24.2854 33.149 25.3335C33.149 26.3816 32.7846 27.2724 32.0557 28.0061C31.3268 28.7397 30.4417 29.1066 29.4005 29.1066C28.3592 29.1066 27.4741 28.7397 26.7453 28.0061C26.0164 27.2724 25.6519 26.3816 25.6519 25.3335C25.6519 24.8724 25.73 24.4427 25.8862 24.0444C26.0424 23.6461 26.2559 23.2793 26.5266 22.9439L21.5285 16.0581C21.3411 16.1629 21.1485 16.2415 20.9506 16.2939C20.7528 16.3463 20.5497 16.3935 20.3415 16.4354V21.6862C21.1537 21.8958 21.8253 22.336 22.3563 23.0068C22.8874 23.6776 23.1529 24.4531 23.1529 25.3335C23.1529 26.3816 22.7885 27.2724 22.0596 28.0061C21.3307 28.7397 20.4456 29.1066 19.4043 29.1066C18.3631 29.1066 17.478 28.7397 16.7491 28.0061C16.0202 27.2724 15.6558 26.3816 15.6558 25.3335C15.6558 24.4531 15.9213 23.6776 16.4524 23.0068C16.9834 22.336 17.655 21.8958 18.4672 21.6862V16.4354C18.259 16.3935 18.0559 16.3463 17.8581 16.2939C17.6602 16.2415 17.4676 16.1629 17.2802 16.0581L12.2821 22.9439C12.5528 23.2793 12.7663 23.6461 12.9225 24.0444C13.0787 24.4427 13.1568 24.8724 13.1568 25.3335C13.1568 26.3816 12.7923 27.2724 12.0634 28.0061C11.3346 28.7397 10.4495 29.1066 9.40822 29.1066ZM9.40822 27.22C9.94967 27.22 10.3974 27.0366 10.7514 26.6698C11.1055 26.303 11.2825 25.8575 11.2825 25.3335C11.2825 24.7885 11.1055 24.3378 10.7514 23.9815C10.3974 23.6252 9.94967 23.447 9.40822 23.447C8.88759 23.447 8.44505 23.6252 8.08061 23.9815C7.71616 24.3378 7.53394 24.7885 7.53394 25.3335C7.53394 25.8575 7.71616 26.303 8.08061 26.6698C8.44505 27.0366 8.88759 27.22 9.40822 27.22ZM19.4043 27.22C19.9458 27.22 20.3935 27.0366 20.7476 26.6698C21.1016 26.303 21.2786 25.8575 21.2786 25.3335C21.2786 24.7885 21.1016 24.3378 20.7476 23.9815C20.3935 23.6252 19.9458 23.447 19.4043 23.447C18.8837 23.447 18.4412 23.6252 18.0767 23.9815C17.7123 24.3378 17.5301 24.7885 17.5301 25.3335C17.5301 25.8575 17.7123 26.303 18.0767 26.6698C18.4412 27.0366 18.8837 27.22 19.4043 27.22ZM29.4005 27.22C29.9419 27.22 30.3897 27.0366 30.7437 26.6698C31.0977 26.303 31.2748 25.8575 31.2748 25.3335C31.2748 24.7885 31.0977 24.3378 30.7437 23.9815C30.3897 23.6252 29.9419 23.447 29.4005 23.447C28.8798 23.447 28.4373 23.6252 28.0729 23.9815C27.7084 24.3378 27.5262 24.7885 27.5262 25.3335C27.5262 25.8575 27.7084 26.303 28.0729 26.6698C28.4373 27.0366 28.8798 27.22 29.4005 27.22ZM19.4043 14.6432C20.279 14.6432 21.0183 14.3393 21.6222 13.7314C22.2262 13.1235 22.5281 12.3794 22.5281 11.499C22.5281 10.6186 22.2262 9.87449 21.6222 9.26661C21.0183 8.65873 20.279 8.35479 19.4043 8.35479C18.5297 8.35479 17.7904 8.65873 17.1865 9.26661C16.5825 9.87449 16.2806 10.6186 16.2806 11.499C16.2806 12.3794 16.5825 13.1235 17.1865 13.7314C17.7904 14.3393 18.5297 14.6432 19.4043 14.6432Z"
                  fill="#2F89FE"
                />
              </svg>
              <h4>Компетенции</h4>
            </div>
          </div>

          <div className="border__box">
            <div className="flex leading-10 text-[32px] text-[#2F89FE] font-semibold ">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" class="mr-4 w-54">
                <circle cx="20" cy="20" r="19" stroke="#2F89FE" stroke-width="2" />
                <path
                  d="M19.9636 33L9.41818 27.2583V18.5917L4 15.6667L19.9636 7L36 15.6667V27.1139H33.8182V16.9306L30.5091 18.5917V27.2583L19.9636 33ZM19.9636 21.8778L31.4182 15.6667L19.9636 9.56389L8.58182 15.6667L19.9636 21.8778ZM19.9636 30.5444L28.3273 25.9583V19.8917L19.9636 24.3333L11.6 19.8194V25.9583L19.9636 30.5444Z"
                  fill="#2F89FE"
                />
              </svg>
              <h4 className="">Образование</h4>
            </div>
            {ed}
          </div>

          <div className="border__box">
            <div className="flex leading-10 text-[32px] text-[#2F89FE] font-semibold ">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" class="mr-4 w-54">
                <circle cx="20" cy="20" r="19" stroke="#2F89FE" stroke-width="2" />
                <path
                  d="M9.875 30C9.375 30 8.9375 29.8184 8.5625 29.4553C8.1875 29.0921 8 28.6684 8 28.1842V13.6579C8 13.1737 8.1875 12.75 8.5625 12.3868C8.9375 12.0237 9.375 11.8421 9.875 11.8421H15.5V8.81579C15.5 8.33158 15.6875 7.90789 16.0625 7.54474C16.4375 7.18158 16.875 7 17.375 7H23.625C24.125 7 24.5625 7.18158 24.9375 7.54474C25.3125 7.90789 25.5 8.33158 25.5 8.81579V11.8421H31.125C31.625 11.8421 32.0625 12.0237 32.4375 12.3868C32.8125 12.75 33 13.1737 33 13.6579V28.1842C33 28.6684 32.8125 29.0921 32.4375 29.4553C32.0625 29.8184 31.625 30 31.125 30H9.875ZM9.875 28.1842H31.125V13.6579H9.875V28.1842ZM17.375 11.8421H23.625V8.81579H17.375V11.8421ZM9.875 28.1842V13.6579V28.1842Z"
                  fill="#2F89FE"
                />
              </svg>
              <h4 className="">Опыт работы</h4>
            </div>
            {exp}
          </div>

          <div className="border__box">
            <div className="flex leading-10 text-[32px] text-[#2F89FE] font-semibold mb-5">
              <svg width="33" height="32" viewBox="0 0 33 32" fill="none" class="mr-4 w-54 ">
                <path
                  d="M25.8042 24.9333L25.8042 22.2667L7.19583 22.2667L7.19583 24.9333L25.8042 24.9333ZM16.6375 17.3333L16.6375 14.6667L7.19583 14.6667L7.19583 17.3333L16.6375 17.3333ZM22.1375 9.73333L22.1375 7.06667L7.19583 7.06667L7.19583 9.73333L22.1375 9.73333ZM33 29.3333C33 30.0444 32.725 30.6667 32.175 31.2C31.625 31.7333 30.9833 32 30.25 32L2.75 32C2.01667 32 1.375 31.7333 0.825 31.2C0.275 30.6667 2.33198e-08 30.0444 3.17997e-08 29.3333L3.49797e-07 2.66667C3.58276e-07 1.95555 0.275 1.33333 0.825 0.800001C1.375 0.266668 2.01667 2.40485e-08 2.75 3.27934e-08L30.25 3.60728e-07C30.9833 3.69473e-07 31.625 0.266669 32.175 0.800002C32.725 1.33333 33 1.95556 33 2.66667L33 29.3333ZM30.25 29.3333L30.25 2.66667L2.75 2.66667L2.75 29.3333L30.25 29.3333ZM2.75 29.3333L30.25 29.3333L2.75 29.3333Z"
                  fill="#2F89FE"
                />
              </svg>
              <h4 className="">Уровень владения</h4>
            </div>
          </div>

          <div className="border__box">
            <div className="flex leading-10 text-[32px] text-[#2F89FE] font-semibold mb-5">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" class="mr-4 w-54">
                <path
                  d="M18.65 30H21.65V18H18.65V30ZM20 14.3C20.4667 14.3 20.8583 14.15 21.175 13.85C21.4917 13.55 21.65 13.1667 21.65 12.7C21.65 12.2333 21.4917 11.8333 21.175 11.5C20.8583 11.1667 20.4667 11 20 11C19.5333 11 19.1417 11.1667 18.825 11.5C18.5083 11.8333 18.35 12.2333 18.35 12.7C18.35 13.1667 18.5083 13.55 18.825 13.85C19.1417 14.15 19.5333 14.3 20 14.3ZM20 40C17.2667 40 14.6833 39.475 12.25 38.425C9.81667 37.375 7.69167 35.9417 5.875 34.125C4.05833 32.3083 2.625 30.1833 1.575 27.75C0.525 25.3167 0 22.7167 0 19.95C0 17.2167 0.525 14.6333 1.575 12.2C2.625 9.76667 4.05833 7.65 5.875 5.85C7.69167 4.05 9.81667 2.625 12.25 1.575C14.6833 0.525 17.2833 0 20.05 0C22.7833 0 25.3667 0.525 27.8 1.575C30.2333 2.625 32.35 4.05 34.15 5.85C35.95 7.65 37.375 9.76667 38.425 12.2C39.475 14.6333 40 17.2333 40 20C40 22.7333 39.475 25.3167 38.425 27.75C37.375 30.1833 35.95 32.3083 34.15 34.125C32.35 35.9417 30.2333 37.375 27.8 38.425C25.3667 39.475 22.7667 40 20 40ZM20.05 37C24.75 37 28.75 35.3417 32.05 32.025C35.35 28.7083 37 24.6833 37 19.95C37 15.25 35.35 11.25 32.05 7.95C28.75 4.65 24.7333 3 20 3C15.3 3 11.2917 4.65 7.975 7.95C4.65833 11.25 3 15.2667 3 20C3 24.7 4.65833 28.7083 7.975 32.025C11.2917 35.3417 15.3167 37 20.05 37Z"
                  fill="#2F89FE"
                />
              </svg>
              <h4 className="">Подробнее</h4>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil excepturi quia officia
              impedit pariatur quae voluptatem vero eveniet eos quasi! Inventore itaque vero,
              possimus impedit officia ipsa nihil eveniet debitis! Maxime corrupti fugit, ipsum illo
              saepe architecto rem id, sed dolores nisi voluptas, alias reprehenderit! Officia eaque
              itaque ducimus magnam modi, iure quibusdam illo vitae! Eos mollitia provident
              asperiores explicabo? Beatae, rem itaque soluta nesciunt voluptas laborum impedit in
              ullam, perferendis aperiam id, porro optio quidem. Iste facere ullam eius, adipisci,
              ipsa rerum neque minus nulla, illum autem ex perspiciatis? Iste vitae hic cumque
              tempore maiores officia quisquam earum sit commodi laborum ducimus blanditiis
              temporibus enim odio repudiandae, laboriosam id, alias dolor dignissimos similique
              tenetur et. Excepturi optio debitis aliquam? Perspiciatis quae sit nam animi
              accusantium, incidunt quisquam vel eos, architecto sint vitae enim necessitatibus
              facilis sed, autem commodi optio debitis veniam asperiores fugit voluptas alias. Sunt
              numquam voluptatum incidunt? Officia commodi veritatis dolor incidunt eveniet id quo
              placeat quam corrupti dolores. Voluptatum fuga possimus excepturi quod sequi odio
              tempore veniam id blanditiis accusamus, at corporis sint autem ut omnis. Sit eligendi
              obcaecati voluptatum quis tempora? Dolores enim, quam quibusdam nihil at nulla earum
              architecto consequatur facilis recusandae possimus, porro quo repudiandae molestias,
              ullam itaque saepe impedit quas in inventore? Vitae animi reiciendis esse modi iste,
              odio blanditiis beatae cupiditate quod nihil assumenda explicabo obcaecati officiis ut
              non. Commodi aut magni corporis molestias eum magnam repellendus laborum accusantium
              officiis est! Fugit, modi quisquam excepturi odio ex eveniet enim natus sed distinctio
              quam saepe dignissimos molestiae nemo numquam blanditiis. Cum architecto impedit sit
              molestias quis. Soluta fugiat repellat facilis porro molestias. At eos officia iure
              suscipit doloribus. Rem excepturi doloremque cumque, sunt ducimus ad obcaecati maxime
              harum voluptas illo repudiandae dignissimos voluptatem nam omnis nostrum, minima
              perferendis, accusantium porro nobis? Sequi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
