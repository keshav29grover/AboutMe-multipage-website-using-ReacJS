import React from 'react'
import styled from 'styled-components'

const Contact = () => {

  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    .container {
      margin-top: 6rem;
      text-align: center;
      .contact-form {
        max-width: 50rem;
        margin: auto;
        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;
            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <h2 className='common-heading'>Feel Free to Contact</h2>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.3932726113567!2d73.75610041468902!3d18.556300387388195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2beaff233c801%3A0x7ece7c36ed7eb0bc!2sBLOCK-B%2C%20NEA%20APARTMENT%2C%20Sus%2C%20Pune%2C%20Maharashtra%20411021!5e0!3m2!1sen!2sin!4v1662820340503!5m2!1sen!2sin"
        width="100%"
        height="300"
        style={{border:0}} 
        allowFullScreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
      <div className='container'>
        <div className='contact-form'>
          <form action='https://formspree.io/f/xnqrjwqq' method='POST' className='contact-inputs'>
            <input type="text" name='username' placeholder='username' autoComplete="off" required/>
            <input type="email" name='Email' placeholder='Email' autoComplete="off" required/>
            <textarea name="message" cols="30" rows="6" autoComplete='off' required></textarea>
            <input type='submit' value='send' />
          </form>
        </div>
      </div>
    </Wrapper>
  )
}

export default Contact