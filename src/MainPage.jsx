import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useHistory } from 'react-router-dom'
import Header from './Header'
import CommentsBlock from './CommentsBlock'
import Footer from './Footer'
import chatIcon from './image/chat-icon.svg'

let userInfo = {
  socialStatus: '',
  workPreference: '',
  previousExperience: '',
  age: null,
  phone: null,
  fullname: null,
  email: null,
}

const MainPage = () => {
  const [step, setStep] = useState(1)
  const [formData, setData] = useState({ ...userInfo })
  const history = useHistory()

  const setAnswer = (event) => {
    debugger
    const answer = event?.target && event.target?.innerText ? event.target?.innerText : ''

    switch (step) {
      case 1: setData({ ...formData, socialStatus: answer.trim() }); break;
      case 2: setData({ ...formData, workPreference: answer.trim() }); break;
      case 3: setData({ ...formData, previousExperience: answer.trim() }); break;
      default: break
    }

    setStep(step + 1)
  }

  const setInputData = (e) => {
    setData({
      ...formData,
      [e.target.name]: e.target?.value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const serviceId = process.env.REACT_APP_MAIL_SERVICE_ID
    const templateId = process.env.REACT_APP_MAIL_TEMPLATE_ID
    const userId = process.env.REACT_APP_MAIL_USER_ID

    console.log('data', formData)
    if (formData.email && formData.fullname && formData.phone && formData.age) {
      emailjs.send(serviceId, templateId, formData, userId)
      .then((response) => {
        console.log('SUCCESS!', response.status, response?.text);
        setData({...userInfo}) //reset form
        history.push('/thanks')
      }, (err) => {
        console.log('FAILED...', err);
        alert('something went wrong')
      });
    } else {
      if (!formData.email) setStep(4)
      if (!formData.age) setStep(5)
      alert('please fill all input fields correctly !!')
    }
  }

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
                  {step === 1 &&
                    <div id="question1" class="question">
                      <h1 class="question-number">السؤال 1 من 6</h1>
                      <div class="question-text"> ماهو وضعك الإجتماعي وهدفك من تجارة النفط </div>
                      <div class="answers">
                        <ul class="answer-list">
                          <ul class="answer-list">
                            <li> <button class="btn rollover" onClick={setAnswer}><span><i class="fa fa-thumbs-up"></i>موظف(ة) عادي أبحث عن دخل اضافي</span></button></li>
                            <li> <button class="btn rollover" onClick={setAnswer}><span><i class="fa fa-thumbs-down"></i>  عاطل(ة) عن العمل أبحث عن دخل مادي </span></button></li>
                            <li> <button class="btn rollover" onClick={setAnswer}><span><i class="fa fa-thumbs-down"></i> رجل /سيدة أعمال أبحث عن فرص جديدة</span></button></li>
                            <li> <button class="btn rollover" onClick={setAnswer}><span><i class="fa fa-thumbs-down"></i> متقاعد (ة) وأريد أن أستثمر وقتي </span></button></li>
                          </ul>
                        </ul>
                      </div>
                    </div>
                  }
                  {step === 2 &&
                    <div id="question2" class="question">
                      <h1 class="question-number">السؤال 2 من 6</h1>
                      <div class="question-text">هل تفضل الإشتغال من الجوال او الحاسوب ؟</div>
                      <div class="answers">
                        <ul class="answer-list">
                          <li> <button class="btn rollover" onClick={setAnswer}><span><i class="fa fa-thumbs-up"></i> الحاسوب</span></button> </li>
                          <li> <button class="btn rollover" onClick={setAnswer}><span><i class="fa fa-thumbs-down"></i>  الجوال</span></button> </li>
                        </ul>
                      </div>
                    </div>
                  }
                  {step === 3 &&
                    <div id="question3" class="question">
                      <h1 class="question-number">السؤال 3 من 6</h1>
                      <div class="question-text">عندك تجربة من قبل في تجارة نفط أرامكو؟</div>
                      <div class="answers">
                        <ul class="answer-list">
                          <li> <button class="btn rollover" onClick={setAnswer}><span><i class="fa fa-thumbs-up"></i>  نعم</span></button> </li>
                          <li> <button class="btn rollover" onClick={setAnswer}><span><i class="fa fa-thumbs-down"></i>لا </span></button> </li>
                        </ul>
                      </div>
                    </div>
                  }
                  {step > 3 && (
                    <form action="/" method="post" onSubmit={onSubmit} data-abide noValidate class="registration-form home-registration-form" id="subscribe-form">
                      {/* <input class="input-field" type="hidden" id="Source" name="Source" />
                      <input type="hidden" id="country_name" name="country_name" value="" />
                      <input type="hidden" id="Country" name="Country" value="" />
                      <input type="hidden" name="Date" />
                      <input type="hidden" name="Page" value="Vici" /> */}
                    {step === 4 &&
                      <div id="question4" class="question">
                        <h1 class="question-number">السؤال 4 من 6</h1>
                        <div class="question-text">الرجاء ادخال بريدك الالكتروني للمتابعة</div>
                        <div class="answers">
                          <ul class="answer-list">
                            <div class="form-group">
                              <input type="email" id="email" name="email" onChange={setInputData} placeholder="البريد الالكتروني" required/>
                            </div>
                            <li> <button class="btn rollover" onClick={() => { setStep(step+1)}}><span><i class="fa fa-thumbs-down"></i>التالي</span></button> </li>
                          </ul>
                        </div>
                      </div>
                    }
                    {step === 5 &&
                      <div id="question5" class="question">
                        <h1 class="question-number">السؤال 5 من 6</h1>
                        <div class="question-text">كم عمرك ؟</div>
                        <div class="answers">
                          <ul class="answer-list">
                            <div class="form-group">
                              <input type="number" id="age" name="age" onChange={setInputData} placeholder="العمر" required />
                            </div>
                            <li> <button class="btn rollover " onClick={() => { setStep(step+1)}}><span><i class="fa fa-thumbs-down"></i>التالي </span></button> </li>
                          </ul>
                        </div>
                      </div>
                    }
                    {step === 6 &&
                      <div id="question6" class="question">
                        <h1 class="question-number">السؤال6 من 6</h1>
                        <div class="question-text"> أجب عن الأسئلة التالية من أجل اكمال طلبك</div>
                        <ul class="answer-list">
                          <div class="form-group">
                            <input type="text" id="fullname" name="fullname" onChange={setInputData} placeholder="الاسم الكامل" required />
                            <br />
                            <br />
                            <input type="number" placeholder="الهاتف" name="phone" onChange={setInputData} id="phone" class="cinp phone" />
                            <br />
                            <br />
                            <button class="button submit-button" type="submit" value="Submit">احجز الآن</button>
                          </div>
                        </ul>
                      </div>
                    }
                    </form>
                  )}
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
              <img src={chatIcon} width="80px" alt='icon' />
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
          <CommentsBlock />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default MainPage