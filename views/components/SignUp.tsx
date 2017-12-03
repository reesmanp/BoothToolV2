import * as React from 'react';
import { connect } from 'react-redux';
import { signUpActions as Actions } from '../actions';

interface SignUpProps {
  history: any;
  isFormComplete: boolean;
  formJSON: any;
  userCollection: any;
  setFormInput: (_: string, __: string) => undefined;
  cancelForm: () => undefined;
}

const mapStateToProps = state => ({
  isFormComplete: state.get('signUp').reduce((acc: boolean, val: string) => acc ? !!val : acc, true),
  formJSON: state.get('signUp').toJS(),
  userCollection: state.getIn(['conn', 'connections', 'users'])
});

const mapDispatchToProps = dispatch => ({
  setFormInput: (action: string, value: string) => Object.keys(Actions) && dispatch(Actions[action](value)),
  cancelForm: () => dispatch(Actions.reset())
});

// CSS mappings
const formInputList = ['First Name', 'Last Name', 'Username','Password', 'Email', 'Telephone'];
const formInputTypeList = ['text', 'text', 'text', 'password', 'email', 'tel'];
const formIconList = ['fa fa-user', 'fa fa-user', 'fa fa-id-card', 'fa fa-lock', 'fa fa-lock', 'fa fa-mobile'];
const formActionList = ['fname', 'lname', 'uname', 'pname', 'email', 'tel'];

const onClick = (dispatch: (_) => undefined, history: any, options?: any) => (
  () => dispatch(options) && history.push('/')
);

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
          className='button is-success has-text-left'
          disabled={!props.isFormComplete}
          onClick={onClick(props.userCollection.insertOne, props.history, props.formJSON)}
        >
          Submit
        </button>
      </div>
      <div className='control column has-text-right'>
        <button
          className='button is-info'
          onClick={onClick(props.cancelForm, props.history)}
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
);

const SignUp = connect(mapStateToProps, mapDispatchToProps)(SignUpComponent);

export default SignUp;
