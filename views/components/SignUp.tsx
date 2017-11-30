import * as React from 'react';
import { connect } from 'react-redux';
import { signUpActions as Actions } from '../actions';

interface SignUpProps {
  history: any;
  isFormComplete: boolean;
  setFormInput: (_: string, __: string) => undefined;
}

const mapStateToProps = state => ({
  isFormComplete: state.get('signUp').reduce((acc: boolean, val: string) => acc ? !!val : acc, true)
});

const mapDispatchToProps = dispatch => ({
  setFormInput: (action: string, value: string) => Object.keys(Actions) && dispatch(Actions[action](value))
});

const formInputList = ['First Name', 'Last Name', 'Username','Password', 'Email', 'Telephone'];
const formInputTypeList = ['text', 'text', 'text', 'password', 'email', 'tel'];
const formIconList = ['fa fa-user', 'fa fa-user', 'fa fa-id-card', 'fa fa-lock', 'fa fa-lock', 'fa fa-mobile'];
const formActionList = ['fname', 'lname', 'uname', 'pname', 'email', 'tel'];

const SignUpComponent = (props: SignUpProps) => (
  <div className='container is-fluid'>
    {formInputList.map((cv: string, idx: number) => (
      <div className='field' key={`SignUp_${cv}_${idx}`}>
        <label className='label'>{cv}</label>
        <div className='control has-icons-left'>
          <input
            className='input'
            type={formInputTypeList[idx]}
            placeholder={cv}
            onChange={event => props.setFormInput(formActionList[idx], event.target.value)}
          />
          <span className='icon is-small is-left'>
            <i className={formIconList[idx]}/>
          </span>
        </div>
      </div>
    ))}
    <div className='field is-grouped columns'>
      <div className='control column'>
        <button
          className='button is-success'
          disabled={!props.isFormComplete}
          onClick={() => props.history.push('/') /* TODO: Add to DB */}
        >
          Submit
        </button>
      </div>
      <div className='control column'>
        <button className='button is-info' onClick={() => props.history.push('/')}>Cancel</button>
      </div>
    </div>
  </div>
);

const SignUp = connect(mapStateToProps, mapDispatchToProps)(SignUpComponent);

export default SignUp;
