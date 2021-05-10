import React from 'react';
import Header from './Header'
import Footer from './Footer'
import user1 from './image/user1.jpg'
import user2 from './image/user2.jpg'
import user3 from './image/user3.jpg'
import user4 from './image/user4.jpg'
import user5 from './image/user5.jpg'
import user6 from './image/user6.jpg'
import user7 from './image/user7.jpg'
import user8 from './image/user8.jpg'
import user9 from './image/user9.jpg'
import chatIcon from './image/chat-icon.svg'


const MainPage = () => {
  return (
    <>
      <Header />

      <div class="steps-quize-section body_content">
        <div class="container">
          <div class="row row-first-end">
            {/* <!-- questionBox End --> */}
            <div class="col-md-5 questionBox">
              <div class="content-box">
                <div class="fade"></div>
                <div class="questions">
                  <div id="question1" class="question">
                    <h1 class="question-number">السؤال 1 من 6</h1>
                    <div class="question-text"> ماهو وضعك الإجتماعي وهدفك من تجارة النفط </div>
                    <div class="answers">
                      <ul class="answer-list">
                        <ul class="answer-list">
                          <li> <a class="btn rollover"><span><i class="fa fa-thumbs-up"></i>موظف(ة) عادي أبحث عن دخل اضافي</span></a></li>
                          <li> <a class="btn rollover"><span><i class="fa fa-thumbs-down"></i>  عاطل(ة) عن العمل أبحث عن دخل مادي </span></a></li>
                          <li> <a class="btn rollover"><span><i class="fa fa-thumbs-down"></i> رجل /سيدة أعمال أبحث عن فرص جديدة</span></a></li>
                          <li> <a class="btn rollover"><span><i class="fa fa-thumbs-down"></i> متقاعد (ة) وأريد أن أستثمر وقتي </span></a></li>
                        </ul>
                      </ul>
                    </div>
                  </div>

                  <div id="question2" class="question">
                    <h1 class="question-number">السؤال 2 من 6</h1>
                    <div class="question-text">هل تفضل الإشتغال من الجوال او الحاسوب ؟</div>
                    <div class="answers">
                      <ul class="answer-list">
                        <li> <a class="btn rollover"><span><i class="fa fa-thumbs-up"></i> الحاسوب</span></a> </li>
                        <li> <a class="btn rollover"><span><i class="fa fa-thumbs-down"></i>  الجوال</span></a> </li>
                      </ul>
                    </div>
                  </div>


                  <div id="question3" class="question">
                    <h1 class="question-number">السؤال 3 من 6</h1>
                    <div class="question-text">عندك تجربة من قبل في تجارة نفط أرامكو؟</div>
                    <div class="answers">
                      <ul class="answer-list">
                        <li> <a class="btn rollover"><span><i class="fa fa-thumbs-up"></i>  نعم</span></a> </li>
                        <li> <a class="btn rollover"><span><i class="fa fa-thumbs-down"></i>لا </span></a> </li>
                      </ul>
                    </div>
                  </div>

                  {/* <!-- question --> */}

                  <form action="/" method="post" data-abide novalidate class="registration-form home-registration-form" id="subscribe-form">
                    <input class="input-field" type="hidden" id="Source" name="Source" />
                    <input type="hidden" id="country_name" name="country_name" value="" />
                    <input type="hidden" id="Country" name="Country" value="" />
                    <input type="hidden" name="Date" />
                    <input type="hidden" name="Page" value="Vici" />
                          <div id="question4" class="question">
                            <h1 class="question-number">السؤال 4 من 6</h1>
                            <div class="question-text">الرجاء ادخال بريدك الالكتروني للمتابعة</div>
                            <div class="answers">

                              <ul class="answer-list">
                                <div class="form-group">
                                  <input type="email" id="email" name="email" placeholder="البريد الالكتروني" required pattern="text" />
                                </div>          
                                <li> <a class="btn rollover"><span><i class="fa fa-thumbs-down"></i>التالي</span></a> </li>
                              </ul>
                            </div>
                          </div>

                          <div id="question5" class="question">
                            <h1 class="question-number">السؤال 5 من 6</h1>
                            <div class="question-text">كم عمرك ؟</div>
                            <div class="answers">
                              <ul class="answer-list">
                                <div class="form-group">
                                  <input type="text" id="age" name="age" placeholder="العمر" required pattern="text" />
                                </div>
                                <li> <a class="btn rollover"><span><i class="fa fa-thumbs-down"></i>التالي </span></a> </li>
                              </ul>
                            </div>
                          </div>

                          <div id="question6" class="question">
                            <h1 class="question-number">السؤال6 من 6</h1>
                            <div class="question-text"> أجب عن الأسئلة التالية من أجل اكمال طلبك</div>

                            <ul class="answer-list">
                              <div class="form-group">
                                <input type="text" id="fullname" name="fullname" placeholder="الاسم الكامل" required pattern="text" />
                                <br />
                                <br />
                                <input type="text" placeholder="الهاتف" name="phone" id="phone" class="cinp phone"  />

                                  <br />
                                  <br />
                                  <button class="button submit-button" type="submit" value="Submit">احجز الآن</button>
                              </div>
                            </ul>
                          </div>  

                  </form>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
                          

      <div class="section-facebook-comment body_content">
        <div class="container">
          <div class="row row-title">
            <div class="top-title">
              <img src={chatIcon} width="80px" />
              <span>
                تعليقات<br />
                            المستثمرين
                    </span>
            </div>
          </div>
          <div class="row row-stats">
            <ul class="stats-bar">
              <li>
                <span>12,068</span> معجب بهذا
                    </li>
            </ul>
          </div>
          <div class="row">

            <div class="comment-line">
              <img class="user-avatar" src={user1} />
              <div class="comment-details">
                <h3>Zakariya Almadih</h3>
                <p>
                  بسم الله ماشاء الله استطعت تحقيق ارباح 300 دولار من اول يوم مع فيجي مع انه ليس لدى ادنى خبره .زيرو  شكرا فيجي وان شاء الله ارباحى تتزايد الايام القادمه
                        </p>
                <ul>
                  <li>
                    <a href="#">أعجبني</a>
                    <a href="#">رد</a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="comment-line">
              <img class="user-avatar" src={user2} />
              <div class="comment-details">
                <h3>سلمان رمضان</h3>
                <p>
                  العمل مع فيجي غير حياتى تماما .من اول شهر قمت بتحقيق 18600 دولار وحاليا افكر بترك وظيفتى والتفرغ تماما للعمل بالتداول
                        </p>
                <ul>
                  <li>

                    <a href="#">أعجبني</a>
                    <a href="#">رد</a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="comment-line">
              <img class="user-avatar" src={user3} />
              <div class="comment-details">
                <h3>أحمد العفيفي</h3>
                <p>
                  فى البدايه كنت متخوف من هذا العمل وفتحت حساب تجريبى وبدأت اتعلم لمده اسبوع وبعدها فتحت حساب حقيقى وقمت بالتداول وربحت من اول اسبوع 4500 دولار . .. شكرا فيجي
                        </p>
                <ul>
                  <li>

                    <a href="#">أعجبني</a>
                    <a href="#">رد</a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="comment-line">
              <img class="user-avatar" src={user4} />
              <div class="comment-details">
                <h3>Mohammed Ibrahem</h3>
                <p>
                  انا ابغى اقول لكل الشباب ان هذا العمل حقيقى ومربح جدا وهنا بالرياض فى شباب حققت ملايين من الفوركس مع فيجي انا سجلت اليوم وعملت ايداع وبدأت فى التداول وحققت 500 دولار ربح من اول صفقه الحمد لله
                        </p>
                <ul>
                  <li>

                    <a href="#">أعجبني</a>
                    <a href="#">رد</a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="comment-line">
              <img class="user-avatar" src={user5} />
              <div class="comment-details">
                <h3>فاضل الشعله</h3>
                <p>
                  احب اقول شكرا فيجي .انا على وشك الجنون !! ربحت عشرين الف دولار خلال اسبوع.غير قادر على التعبير عن شعورى وانا اجمع هذا الكم الهائل من المال امام جهاز الكمبيوتر من المنزل ..شكرا جداااااااااا فيجي مدين لكم بعمرى واشجع كل الشباب الخليجى العاطل انه يبدا بالعمل
                  مع هذه الشركه الرائعه
                        </p>

                <ul>
                  <li>

                    <a href="#">أعجبني</a>
                    <a href="#">رد</a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="comment-line">
              <img class="user-avatar" src={user6} />
              <div class="comment-details">
                <h3>Ali AlHashem</h3>
                <p>
                  جزاكم الله خيرا كثير من اصحابى يعملون بالتداول ويربحون ربح حلال ان شاء الله بسجل معاهم والله المستعان
                        </p>
                <ul>
                  <li>

                    <a href="#">أعجبني</a>
                    <a href="#">رد</a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="comment-line">
              <img class="user-avatar" src={user7} />
              <div class="comment-details">
                <h3>Mohammed Khamis</h3>
                <p>
                  كنت دايما اقول لما الموضوع دا سهل ومربح ليش كل البشر ما تعمل بيه ؟ بعدين علمت ان ليست كل الشركات تقدم دعم وتساعد المتداولين مثل فيجي ..الحمد لله اعمل مهم منذ فتره واربح الكثير ونصحت اخوتى جميعا بالعمل معهم وحاليا انا وكل اهل بيتى نعمل بالتداول مع يو افكس
                        </p>
                <ul>
                  <li>

                    <a href="#">أعجبني</a>
                    <a href="#">رد</a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="comment-line">
              <img class="user-avatar" src={user8} />
              <div class="comment-details">
                <h3>Mareike Lehmann</h3>
                <p>
                  انا سحلت مع هذه الشركه من شهر. كل يوم صباحا يتصل بى المستشار المالى الخاص بى من الشركه واسمه ابراهيم .. هو شخص محترم وامين وفى منتهى الاخلاق دائما يقول لى اليوم هناك صفقات رابحه كذا وكذا وكذا ويحدد لى ميعاد فتح الصفقه واغلاقها عند تحقيق ارباح معينه .والحمد
                  لله كل توقعاتها تصيب ودائما اربح الصفقات بفضل توصياته .بصراحه كدا مشالسوق مليان متداولين وكفايه ما نبى متداولين جدد عشان المنافسه ما تكون كبيره الله يرضى عنكم
                        </p>
                <ul>
                  <li>

                    <a href="#">أعجبني</a>
                    <a href="#">رد</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="comment-line">
              <img class="user-avatar" src={user9} />
              <div class="comment-details">
                <h3>Ali Al-akash</h3>
                <p>
                  عمرى 20 سنه وتقريبا انا اصغر متداول  ..اصحابى يحقدون عليا لانى راكب سياره رولز رويس وكله بفضل العمل بالتداول مع فيجي
                        </p>

                <ul>
                  <li>

                    <a href="#">أعجبني</a>
                    <a href="#">رد</a>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default MainPage