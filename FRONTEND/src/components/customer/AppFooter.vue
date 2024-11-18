<template>
  <hr />
  <footer style="z-index: 1000;">
    <div class="container fst-normal">
      <div class="row">
        <div class="col-6 col-md-4 lh-lg">
          <h3>Thông Tin</h3>
          <div><span>Liên Hệ</span></div>
          <div><span>Thông Tin Vận Chuyển</span></div>
          <div><span>Điều Khoản</span></div>
          <!-- <div><span>Liên Hệ</span></div> -->
          <!-- <div><span>Hoàn Trả</span></div> -->
        </div>

        <div class="col-6 col-md-4 lh-lg">
          <h3>Thông Tin Bổ Sung</h3>
          <div><span>Chính Sách Riêng Tư</span></div>
          <div><span>Bản Đồ</span></div>
          <div><span>Tài Khoản</span></div>
        </div>

        <div class="col-6 col-md-4 lh-lg">
          <h3>Liên Hệ</h3>
          <div><span>Địa chỉ: Ninh Kiều, Cần Thơ</span></div>
          <div><span>Điện thoại: 0559771315</span></div>
          <div>
            <p>
              Email:
              <a href="mailto:buikimquangloc@gmail.com">buikimquangloc@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style>
footer {
  background-color: #13214a;
  color: #fff;
  padding: 30px 0;
}

footer h3 {
  font-size: 18px;
  margin-bottom: 30px;
}

footer span {
  display: block;
  margin-bottom: 10px;
}

footer .container {
  max-width: 1200px;
}

footer .row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

footer .col-6 {
  width: 100%;
  max-width: 50%;
  margin-bottom: 30px;
}

@media (min-width: 768px) {
  footer .col-6 {
    width: 100%;
    max-width: 25%;
  }
}

footer p {
  font-size: 14px;
  margin: 0;
}

footer .bg-light {
  background-color: #f2f2f2;
  padding: 20px 0;
}
</style>
