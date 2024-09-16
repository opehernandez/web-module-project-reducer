import React, { useReducer } from 'react';

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
import {reducer, initialState } from './reducers';
import { applyNumber, changeOperation, clearDisplay, clearMemory, setMemory, getFromMemory } from './actions';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

function handlePad(num) {
  dispatch(applyNumber(num))
}
function handleOp(op) {
  dispatch(changeOperation(op))
}
function handleClear() {
  dispatch(clearDisplay())
}
function handleClearMemory() {
  dispatch(clearMemory())
}
function handleSetMemory() {
  dispatch(setMemory())
}
function handleGetFromMemory() {
  dispatch(getFromMemory())
}

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <div className="navbar-brand" href="#"><img alt='' width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</div>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton onClick={() => {handleSetMemory()}} value={"M+"}/>
              <CalcButton onClick={() => {handleGetFromMemory()}} value={"MR"}/>
              <CalcButton onClick={() => {handleClearMemory()}} value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => {handlePad(1)}} value={1}/>
              <CalcButton onClick={() => {handlePad(2)}} value={2}/>
              <CalcButton onClick={() => {handlePad(3)}} value={3}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => {handlePad(4)}} value={4}/>
              <CalcButton onClick={() => {handlePad(5)}} value={5}/>
              <CalcButton onClick={() => {handlePad(6)}} value={6}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => {handlePad(7)}} value={7}/>
              <CalcButton onClick={() => {handlePad(8)}} value={8}/>
              <CalcButton onClick={() => {handlePad(9)}} value={9}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => {handleOp('+')}} value={"+"}/>
              <CalcButton onClick={() => {handleOp('*')}} value={"*"}/>
              <CalcButton onClick={() => {handleOp('-')}} value={"-"}/>
            </div>

            <div className="row ce_button">
              <CalcButton onClick={() => {handleClear()}} value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
