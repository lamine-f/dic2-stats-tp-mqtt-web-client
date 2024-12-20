const [state, setState] = [{value: STATE.OFF}, (value) => {
    state.value = value;
    app.setAttribute("id", value);
}];

const onRecoveryState = ({value}) => setState(value);
const onReceivingMessage = ({value}) => setState(value === '1' ? STATE.ON:STATE.OFF);

switchOffButton.addEventListener('click', () => {
    setState(STATE.OFF);
    notifyAll('0');
});

switchOnButton.addEventListener('click', () => {
    setState(STATE.ON);
    notifyAll('1');
});