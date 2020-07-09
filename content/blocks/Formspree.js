import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import styled from '@emotion/styled';

const GATEWAY_URL = "https://formspree.io/xeqlywvw"

export default () => {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    errors,
    reset,
    formState: { isSubmitting }
  } = useForm();

  const onSubmit = async data => {
    try {
      await fetch(GATEWAY_URL, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      });
      setSubmitted(true);
      reset();
    } catch (error) {
      setError(
        "submit",
        "submitError",
        `Oops! There seems to be an issue! ${error.message}`
      );
    }
  };

  const showThankYou = (
    <div className="msg-confirm">
      <p>Awesome! Your message was sent.</p>
    </div>
  );

  const showForm = (
    <form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup role="group">
          <GroupItem>
          <div
              className="formControl"
              style={{
                marginRight: "1rem"
              }}
              >
            <h3>Let's get some basic contact info</h3>
            <p>We're going to be chatting a lot, so share with me your preferred phone and email. I won't share with anyone else.</p>
            </div>
          </GroupItem>
          <GroupItem>
              <div
              className="formControl"
              style={{
                margin: `10px`,
              }}>
            <FormLabel className="formLabel" htmlFor="firstName">First name</FormLabel>
              <TextInput
              className="textInput"
              id="firstName"
              type="text"
              placeholder="Luke"
              name="firstName"
              aria-invalid={errors.firstName ? "true" : "fales"}
              aria-describedby="firstNameError"
              ref={register({required: true, maxLength: 80})}
              disabled={isSubmitting}
              />
              <span id="firstNameError" className="formError" style={{ display: errors.firstName ? "block" : "none"}}>
              First name is required.
              </span>
              </div>
              <div
              className="formControl"
              style={{
                margin: `10px`,
              }}>
                <FormLabel className="formLabel" htmlFor="lastName">Last name</FormLabel>
                <TextInput
              className="textInput"
              id="lastName"
              type="text"
              placeholder="Skywalker"
              name="lastName"
              aria-invalid={errors.lastName ? "true" : "fales"}
              aria-describedby="lastNameError"
              ref={register({required: true, maxLength: 100})}
              disabled={isSubmitting}
              />
              <span id="lastNameError" className="formError" style={{ display: errors.lastName ? "block" : "none"}}>
              Last name is required.
              </span>
              </div>
              <div
              className="formControl"
              style={{
                margin: `10px`,
              }}>
                <FormLabel className="formLabel" htmlFor="email">Email</FormLabel>
              <TextInput
              id="email"
              className="textInput"
              type="text"
              placeholder="lskywalker@jedimasters.com"
              name="email"
              aria-invalid={errors.email ? "true" : "fales"}
              aria-describedby="emailError"
              ref={register({required: true, pattern: /^\S+@\S+$/i})}
              disabled={isSubmitting}
              />
               <span id="emailError" className="formError" style={{ display: errors.email ? "block" : "none"}}>
              Email address is required.
              </span>
              </div>
              <div
              className="formControl"
              style={{
                margin: `10px`,
              }}>
                <FormLabel className="formLabel" htmlFor="phone">Phone</FormLabel>
            <TextInput
              id="phone"
              type="tel"
              placeholder="Give me those digits"
              name="phone"
              ref={register({required: true, maxLength: 14})}
              disabled={isSubmitting}
              aria-invalid={errors.phone ? "true" : "fales"}
              aria-describedby="phoneError"
              />
              <span id="phoneError" className="formError" style={{ display: errors.phone ? "block" : "none"}}>
              Phone number is required.
              </span>
              </div>
          </GroupItem>
        </FormGroup>
        <FormGroup>
          <GroupItem>
          <div
              className="formControl"
              style={{
                marginRight: "1rem"
              }}>
              <h3>Background Info &amp; Research Ideas</h3>
              <p>Help us understand what is going on right now, where can we make the most progress first? What drove you to seek help and how will you know things are turning around?</p>
              </div>
          </GroupItem>
          <GroupItem>
          <div
              className="formControl"
              style={{
                margin: `10px`,
              }}>
            <FormLabel className="formLabel" htmlFor="goals">What are your biggest goals for our work together?</FormLabel>
            <StyledTextArea
            id="goals"
            name="goals"
            placeholder=""
            ref={register({required: true, max: 5000, min: 50})}
            disabled={isSubmitting}
            aria-invalid={errors.goals ? "true" : "fales"}
              aria-describedby="goalsError"
            />
            <span id="goalsError" className="formError" style={{ display: errors.goals ? "block" : "none"}}>
              Give me something to work with, at least 50 characters or so, let.
              </span>

          </div>
          <div
              className="formControl"
              style={{
                margin: `10px`,
              }}>
                <FormLabel className="formLabel" htmlFor="concerns">What are your biggest concerns about you current situation?</FormLabel>
                <StyledTextArea
                id="concerns"
                name="concerns"
                ref={register({max: 5000, min: 50})}
                disabled={isSubmitting}
                />
            </div>
            <div
              className="formControl"
              style={{
                margin: `10px`,
              }}>
                <FormLabel className="formLabel" htmlFor="missed">Additional Questions/Comments?</FormLabel>
                <StyledTextArea
                id="missed"
                name="missed"
                ref={register}
                disabled={isSubmitting}
                />
            </div>
            <div
              className="formControl"
              style={{
                marginLeft: `10px`,
                marginRight: `10px`,
                marginTop: `30px`,
                marginBottom: `30px`,
              }}>
            <SubmitButton
              type="submit"
              disabled={isSubmitting}
              style={{
                fontSize: `24px`,
                cursor: `pointer`,
                marginTop: `30px`,
                paddingTop: `12px`,
                paddingBottom: `12px`,
                paddingLeft: `20px`,
                paddingRight: `20px`,
              }}
            >
            LET'S GO! <span role="img" aria-label="fist emoji">👊</span>
            </SubmitButton>
            </div>
          </GroupItem>
        </FormGroup>
    </form>
  );

  return (
    <div>
      <div className="form-side">{submitted ? showThankYou : showForm}</div>
    </div>
  )

}

const SubmitButton = styled.button`

color: #fff !important;
font-size: 1.5rem;
font-family: Raleway, serif;
text-decoration: none;
background: #b12d94;
padding: 20px;
border-radius: 5px;
display: block;
align-self: inherit !important;
border: none;
cursor: pointer;
transition: all 0.4s ease 0s;
  &:hover {
    background: #434343;
    letter-spacing: 1px;
    -webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
    -moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
    box-shadow: 5px 40px -10px rgba(0,0,0,0.57);
    transition: all 0.4s ease 0s;
  }
  @media (max-width: 600px) {
      width: 100%;
  }
 `;
const FormGroup = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  margin-top: 80px;

  @media (max-width:670px) {
    flex-direction: column;
    margin-top: 30px;
  }

`;
const GroupItem = styled.div`
  flex-direction: column;
  flex-grow: 1;
  flex-basis: 0%;

`;

const FormLabel = styled.label`
    font-size: 16px;
    font-size: 0.95rem;
    margin-bottom: 5px;
    line-height: 1.5;
    font-weight: 600;
    display: block;
    -webkit-transition: all 150ms cubic-bezier(0.694, 0.0482, 0.335, 1);
    transition: all 150ms cubic-bezier(0.694, 0.0482, 0.335, 1);

`;


const TextInput = styled.input`
    max-width: 400px;
    width: 100%;
    height: 40px;
    background-color: var(--color-formBackground);
    background-repeat: no-repeat;
    background-size: 0% 100%;
    -webkit-box-shadow: 0 1px 1px -1px rgba(152, 162, 179, 0.2), 0 3px 2px -2px rgba(152, 162, 179, 0.2), inset 0 0 0 1px rgba(15, 39, 118, 0.1);
    box-shadow: 0 1px 1px -1px rgba(152, 162, 179, 0.2), 0 3px 2px -2px rgba(152, 162, 179, 0.2), inset 0 0 0 1px rgba(15, 39, 118, 0.1);
    -webkit-transition: background-image 150ms ease-in, background-size 150ms ease-in, background-color 150ms ease-in, -webkit-box-shadow 150ms ease-in;
    transition: background-image 150ms ease-in, background-size 150ms ease-in, background-color 150ms ease-in, -webkit-box-shadow 150ms ease-in;
    transition: box-shadow 150ms ease-in, background-image 150ms ease-in, background-size 150ms ease-in, background-color 150ms ease-in;
    transition: box-shadow 150ms ease-in, background-image 150ms ease-in, background-size 150ms ease-in, background-color 150ms ease-in, -webkit-box-shadow 150ms ease-in;
    font-family: "Inter UI", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-weight: 400;
    letter-spacing: -.005em;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -webkit-font-kerning: normal;
    font-kerning: normal;
    font-size: 16px;
    line-height: 1em;
    color: var(--color-text);
    border: none;
    border-radius: 3px;
    padding: 12px;
    &:focus {
      outline: none;
      background-color: var(--color-formBackground);
      color: var(--color-text);
      background-image: linear-gradient(to top, var(--color-secondary), var(--color-secondary) 2px, transparent 2px, transparent 100%);
      background-size: 100% 100%;
      -webkit-box-shadow: 0 1px 1px -1px rgba(152, 162, 179, 0.2), 0 4px 4px -2px rgba(152, 162, 179, 0.2), inset 0 0 0 1px rgba(15, 39, 118, 0.1);
      box-shadow: 0 1px 1px -1px rgba(152, 162, 179, 0.2), 0 4px 4px -2px rgba(152, 162, 179, 0.2), inset 0 0 0 1px rgba(15, 39, 118, 0.1);
    }
`;


const StyledTextArea = styled.textarea`
max-width: 400px;
width: 100%;
background-color: var(--color-formBackground);
background-repeat: no-repeat;
background-size: 0% 100%;
-webkit-box-shadow: 0 1px 1px -1px rgba(152, 162, 179, 0.2), 0 3px 2px -2px rgba(152, 162, 179, 0.2), inset 0 0 0 1px rgba(15, 39, 118, 0.1);
box-shadow: 0 1px 1px -1px rgba(152, 162, 179, 0.2), 0 3px 2px -2px rgba(152, 162, 179, 0.2), inset 0 0 0 1px rgba(15, 39, 118, 0.1);
-webkit-transition: background-image 150ms ease-in, background-size 150ms ease-in, background-color 150ms ease-in, -webkit-box-shadow 150ms ease-in;
transition: background-image 150ms ease-in, background-size 150ms ease-in, background-color 150ms ease-in, -webkit-box-shadow 150ms ease-in;
transition: box-shadow 150ms ease-in, background-image 150ms ease-in, background-size 150ms ease-in, background-color 150ms ease-in;
transition: box-shadow 150ms ease-in, background-image 150ms ease-in, background-size 150ms ease-in, background-color 150ms ease-in, -webkit-box-shadow 150ms ease-in;
font-family: "Inter UI", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
font-weight: 400;
letter-spacing: -.005em;
-webkit-text-size-adjust: 100%;
-ms-text-size-adjust: 100%;
-webkit-font-kerning: normal;
-webkit-appearance: textarea;
font-kerning: normal;
font-size: 16px;
line-height: 1em;
color: var(--color-text);
border: none;
border-radius: 3px;
padding: 12px;
line-height: 1.5;
&:focus {
  outline: none;
  background-color: var(--color-formBackground);
  color: var(--color-text);
  background-image: linear-gradient(to top, var(--color-secondary), var(--color-secondary) 2px, transparent 2px, transparent 100%);
  background-size: 100% 100%;
  -webkit-box-shadow: 0 1px 1px -1px rgba(152, 162, 179, 0.2), 0 4px 4px -2px rgba(152, 162, 179, 0.2), inset 0 0 0 1px rgba(15, 39, 118, 0.1);
  box-shadow: 0 1px 1px -1px rgba(152, 162, 179, 0.2), 0 4px 4px -2px rgba(152, 162, 179, 0.2), inset 0 0 0 1px rgba(15, 39, 118, 0.1);
}
`;