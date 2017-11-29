import * as React from 'react';
import { connect } from 'react-redux';

interface SignUpProps {
  isFormComplete: boolean
}

const mapStateToProps = state => ({
  isFormComplete: state.get('signUp').reduce((acc: boolean, val: string) => acc ? !!val : acc, true)
});

const mapDispatchToProps = dispatch => ({
});

const formInputList = ['First Name', 'Last Name', 'Username','Password', 'Email', 'Telephone'];
const formInputTypeList = ['text', 'text', 'text', 'password', 'email', 'tel'];
const formIconList = ['fa fa-user', 'fa fa-user', 'fa fa-id-card', 'fa fa-lock', 'fa fa-lock', 'fa fa-mobile'];

const SignUpComponent = (props: SignUpProps) => (
  <div className='container is-fluid'>
    {formInputList.map((cv: string, idx: number) => (
      <div className='field'>
        <label className='label'>{cv}</label>
        <div className='control'>
          <input
            className='input'
            type={formInputTypeList[idx]}
            placeholder={cv}
          />
          <span className='icon is-small is-left'>
            <i className={formIconList[idx]}/>
          </span>
        </div>
      </div>
    ))}
    <div className='field'>
      <div className='control'>
        <button className='button is-success' disabled={!props.isFormComplete}>Submit</button>
      </div>
    </div>
  </div>
);

const SignUp = connect(mapStateToProps, mapDispatchToProps)(SignUpComponent);

export default SignUp;
