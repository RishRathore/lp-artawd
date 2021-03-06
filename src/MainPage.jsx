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
                      <h1 class="question-number">???????????? 1 ???? 6</h1>
                      <div class="question-text"> ???????? ???????? ?????????????????? ?????????? ???? ?????????? ?????????? </div>
                      <div class="answers">
                        <ul class="answer-list">
                          <ul class="answer-list">
                            <li> <button class="btn rollover" onClick={setAnswer}><span><i class="fa fa-thumbs-up"></i>????????(??) ???????? ???????? ???? ?????? ??????????</span></button></li>
                            <li> <button class="btn rollover" onClick={setAnswer}><span><i class="fa fa-thumbs-down"></i>  ????????(??) ???? ?????????? ???????? ???? ?????? ???????? </span></button></li>
                            <li> <button class="btn rollover" onClick={setAnswer}><span><i class="fa fa-thumbs-down"></i> ?????? /???????? ?????????? ???????? ???? ?????? ??????????</span></button></li>
                            <li> <button class="btn rollover" onClick={setAnswer}><span><i class="fa fa-thumbs-down"></i> ???????????? (??) ?????????? ???? ???????????? ???????? </span></button></li>
                          </ul>
                        </ul>
                      </div>
                    </div>
                  }
                  {step === 2 &&
                    <div id="question2" class="question">
                      <h1 class="question-number">???????????? 2 ???? 6</h1>
                      <div class="question-text">???? ???????? ???????????????? ???? ???????????? ???? ?????????????? ??</div>
                      <div class="answers">
                        <ul class="answer-list">
                          <li> <button class="btn rollover" onClick={setAnswer}><span><i class="fa fa-thumbs-up"></i> ??????????????</span></button> </li>
                          <li> <button class="btn rollover" onClick={setAnswer}><span><i class="fa fa-thumbs-down"></i>  ????????????</span></button> </li>
                        </ul>
                      </div>
                    </div>
                  }
                  {step === 3 &&
                    <div id="question3" class="question">
                      <h1 class="question-number">???????????? 3 ???? 6</h1>
                      <div class="question-text">???????? ?????????? ???? ?????? ???? ?????????? ?????? ??????????????</div>
                      <div class="answers">
                        <ul class="answer-list">
                          <li> <button class="btn rollover" onClick={setAnswer}><span><i class="fa fa-thumbs-up"></i>  ??????</span></button> </li>
                          <li> <button class="btn rollover" onClick={setAnswer}><span><i class="fa fa-thumbs-down"></i>???? </span></button> </li>
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
                        <h1 class="question-number">???????????? 4 ???? 6</h1>
                        <div class="question-text">???????????? ?????????? ?????????? ???????????????????? ????????????????</div>
                        <div class="answers">
                          <ul class="answer-list">
                            <div class="form-group">
                              <input type="email" id="email" name="email" onChange={setInputData} placeholder="???????????? ????????????????????" required/>
                            </div>
                            <li> <button class="btn rollover" onClick={() => { setStep(step+1)}}><span><i class="fa fa-thumbs-down"></i>????????????</span></button> </li>
                          </ul>
                        </div>
                      </div>
                    }
                    {step === 5 &&
                      <div id="question5" class="question">
                        <h1 class="question-number">???????????? 5 ???? 6</h1>
                        <div class="question-text">???? ???????? ??</div>
                        <div class="answers">
                          <ul class="answer-list">
                            <div class="form-group">
                              <input type="number" id="age" name="age" onChange={setInputData} placeholder="??????????" required />
                            </div>
                            <li> <button class="btn rollover " onClick={() => { setStep(step+1)}}><span><i class="fa fa-thumbs-down"></i>???????????? </span></button> </li>
                          </ul>
                        </div>
                      </div>
                    }
                    {step === 6 &&
                      <div id="question6" class="question">
                        <h1 class="question-number">????????????6 ???? 6</h1>
                        <div class="question-text"> ?????? ???? ?????????????? ?????????????? ???? ?????? ?????????? ????????</div>
                        <ul class="answer-list">
                          <div class="form-group">
                            <input type="text" id="fullname" name="fullname" onChange={setInputData} placeholder="?????????? ????????????" required />
                            <br />
                            <br />
                            <input type="number" placeholder="????????????" name="phone" onChange={setInputData} id="phone" class="cinp phone" />
                            <br />
                            <br />
                            <button class="button submit-button" type="submit" value="Submit">???????? ????????</button>
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
                ??????????????<br />
                            ????????????????????
                    </span>
            </div>
          </div>
          <div class="row row-stats">
            <ul class="stats-bar">
              <li>
                <span>12,068</span> ???????? ????????
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