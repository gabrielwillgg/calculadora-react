import Input from './components/Input';
import Button from './components/Button';

import { Container, Content, Row, RowExpand } from './styles';
import { useState } from 'react';


const App = () => {
    const [currentNumber, setCurrentNumber] = useState('0');
    const [firstNumber, setFirstNumber] = useState('0');
    const [operation, setOperation] = useState('');
    const [sinal, setSinal] = useState('')
    let igual = '';

    const handleOnClear = () => {
        setCurrentNumber('0')
        setFirstNumber('0')
        setOperation('')
        setSinal('')
        igual = '';
    };

    const handleAddNumber = (num) => {
        if (firstNumber === '0' && sinal === '') {
            setCurrentNumber(prev => `${prev === '0' ? (num === '.' ? '0' : '') : (num === '.' && prev.includes('.') ? num = '' : prev)}${num}`)
        } else if (currentNumber === '0' && sinal !== '') {
            setCurrentNumber(prev => `${prev === '0' ? (num === '.' ? '0' : '') : (num === '.' && prev.includes('.') ? num = '' : prev)}${num}`)
            setSinal('')
        } else if (sinal !== '') {
            setCurrentNumber('0')
            setCurrentNumber(prev => `${prev === '0' ? (num === '.' ? '0' : '') : (num === '.' && prev.includes('.') ? num = '' : prev)}${num}`)
            setSinal('')
        } else {
            setCurrentNumber(prev => `${prev === '0' ? (num === '.' ? '0' : '') : (num === '.' && prev.includes('.') ? num = '' : prev)}${num}`)
        }

    }

    const handleEraseNumber = () => {
        setCurrentNumber(prev => prev !== '0' ? (prev.length > 1 ? prev.slice(0, -1) : prev = '0') : prev = '0')
    }

    const handleSumNumbers = () => {
        if (firstNumber === '0' && igual === '') {
            setFirstNumber(String(currentNumber));
            setOperation('+')
            setSinal('+')
        } else if (operation === '+' && igual === '') {
            const sum = Number(firstNumber) + Number(currentNumber);
            setCurrentNumber(sum)
            setFirstNumber(sum)
            setOperation('+')
            setSinal('+')
        } else if (igual === '') {
            handleEquals();
            setOperation('+')
            setSinal('+')
        } else {
            const sum = Number(firstNumber) + Number(currentNumber);
            setCurrentNumber(sum)
            setFirstNumber(sum)
            setOperation('')
            setSinal('')
            igual = ''
        }

    }

    const handleMinusNumbers = () => {
        if (firstNumber === '0' && igual === '') {
            setFirstNumber(String(currentNumber));
            setOperation('-')
            setSinal('-')
        } else if (operation === '-' && igual === '') {
            const sum = Number(firstNumber) - Number(currentNumber);
            setCurrentNumber(sum)
            setFirstNumber(sum)
            setOperation('-')
            setSinal('-')
        } else if (igual === '') {
            handleEquals();
            setOperation('-')
            setSinal('-')
        } else {
            const sum = Number(firstNumber) - Number(currentNumber);
            setCurrentNumber(sum)
            setFirstNumber(sum)
            setOperation('')
            setSinal('')
            igual = ''
        }

    }

    const handleMultiplyNumbers = () => {
        if (firstNumber === '0' && igual === '') {
            setFirstNumber(String(currentNumber));
            setOperation('x')
            setSinal('x')
        } else if (operation === 'x' && igual === '') {
            const sum = Number(firstNumber) * Number(currentNumber);
            setCurrentNumber(sum)
            setFirstNumber(sum)
            setOperation('x')
            setSinal('x')
        } else if (igual === '') {
            handleEquals();
            setOperation('x')
            setSinal('x')
        } else {
            const sum = Number(firstNumber) * Number(currentNumber);
            setCurrentNumber(sum)
            setFirstNumber(sum)
            setOperation('')
            setSinal('')
            igual = ''
        }

    }

    const handleDivideNumbers = () => {
        if (firstNumber === '0' && igual === '') {
            setFirstNumber(String(currentNumber));
            setOperation('/')
            setSinal('/')
        } else if (operation === '/' && igual === '') {
            const sum = Number(firstNumber) / Number(currentNumber);
            setCurrentNumber(sum)
            setFirstNumber(sum)
            setOperation('/')
            setSinal('/')
        } else if (igual === '') {
            handleEquals();
            setOperation('/')
            setSinal('/')
        } else {
            const sum = Number(firstNumber) / Number(currentNumber);
            setCurrentNumber(sum)
            setFirstNumber(sum)
            setOperation('')
            setSinal('')
            igual = ''
        }

    }

    const handleEquals = () => {
        if (firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
            igual = '1';
            switch (operation) {
                case '+':
                    handleSumNumbers();
                    break;
                case '-':
                    handleMinusNumbers();
                    break;
                case 'x':
                    handleMultiplyNumbers();
                    break;
                case '/':
                    handleDivideNumbers();
                    break;
                default:
                    break;
            }
        }

    }

    return (
        <Container>
            <Content>
                <Input value={currentNumber} />
                <Row>
                    <RowExpand>
                        <Button label="c" onClick={handleOnClear} />
                    </RowExpand>
                    <Button label="←" onClick={handleEraseNumber} />
                    <Button label="/" onClick={handleDivideNumbers} />
                </Row>
                <Row>
                    <Button label="7" onClick={() => handleAddNumber('7')} />
                    <Button label="8" onClick={() => handleAddNumber('8')} />
                    <Button label="9" onClick={() => handleAddNumber('9')} />
                    <Button label="*" onClick={handleMultiplyNumbers} />
                </Row>
                <Row>
                    <Button label="4" onClick={() => handleAddNumber('4')} />
                    <Button label="5" onClick={() => handleAddNumber('5')} />
                    <Button label="6" onClick={() => handleAddNumber('6')} />
                    <Button label="-" onClick={handleMinusNumbers} />
                </Row>
                <Row>
                    <Button label="1" onClick={() => handleAddNumber('1')} />
                    <Button label="2" onClick={() => handleAddNumber('2')} />
                    <Button label="3" onClick={() => handleAddNumber('3')} />
                    <Button label="+" onClick={handleSumNumbers} />
                </Row>
                <Row>
                    <RowExpand>
                        <Button label="0" onClick={() => handleAddNumber('0')} />
                    </RowExpand>
                    <Button label="." onClick={() => handleAddNumber('.')} />
                    <Button label="=" onClick={handleEquals} />
                </Row>
            </Content>
        </Container>
    );
}

export default App;
