import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import Title from '../components/common/Title';
import { CartStyled } from './Cart';
import React from 'react';
import CartSummary from '../components/cart/CartSummary';
import Button from '../components/common/Button';
import InputText from '../components/common/InputText';
import { useForm } from 'react-hook-form';
import { Delivery, OrderSheet } from '../models/order.model';
import FindAddressButton from '../components/order/FindAddressButton';
import { order } from '../api/order.api';
import { useAlert } from '../hooks/useAlert';

interface DeliveryForm extends Delivery {
	address_detail: string;
}

function Order() {
	const { showAlert, showConfirm } = useAlert();
	const navigate = useNavigate();
	const location = useLocation();
	const orderDataFromCart = location.state;
	const { total_quantity, total_price, first_book_title } = orderDataFromCart;
	
	const { register, handleSubmit, setValue, formState: { errors } } = useForm<DeliveryForm>();
	
	const handlePay = (data: DeliveryForm) => {
		console.log('data', data);
		
		const orderData: OrderSheet = {
			...orderDataFromCart,
			delivery: {
				...data,
				address: `${ data.address } ${ data.address_detail }`,
			}
		};
		
		showConfirm('주문을 진행하시겠습니까?', () => {
			order(orderData).then(() => {
				showAlert('주문이 처리되었습니다');
				navigate('/orderlist');
			});
		});
	};
	
	return (
		<>
			<Title size="large">주문서 작성</Title>
			<CartStyled>
				<div className="content">
					<div className="order-info">
						<Title size="medium" color="text">
							배송 정보
						</Title>
						<form className="delivery">
							<fieldset>
								<label>주소</label>
								<div className="input">
									<InputText inputType="text" { ...register('address', { required: true }) } />
								</div>
								<FindAddressButton onCompleted={ (address) => {setValue('address', address);} } />
							</fieldset>
							{ errors.address && <p className="error-text">주소를 입력해 주세요</p> }
							
							<fieldset>
								<label>상세 주소</label>
								<div className="input">
									<InputText inputType="text" { ...register('address_detail', { required: true }) } />
								</div>
							</fieldset>
							{ errors.address_detail && <p className="error-text">상세주소를 입력해 주세요</p> }
							
							<fieldset>
								<label>수령인</label>
								<div className="input">
									<InputText inputType="text" { ...register('receiver', { required: true }) } />
								</div>
							</fieldset>
							{ errors.receiver && <p className="error-text">수령인을 입력해 주세요</p> }
							
							<fieldset>
								<label>전화번호</label>
								<div className="input">
									<InputText inputType="text" { ...register('contact', { required: true }) } />
								</div>
							</fieldset>
							{ errors.contact && <p className="error-text">전화번호를 입력해 주세요</p> }
						
						</form>
					</div>
					<div className="order-info">
						<Title size="medium" color="text">
							주문 상품
						</Title>
						<strong>
							{ first_book_title } 등 총 { total_quantity } 권
						</strong>
					</div>
				</div>
				<div className="summary">
					<CartSummary totalQuantity={ total_quantity } totalPrice={ total_price } />
					<Button size="large" scheme="primary" onClick={handleSubmit(handlePay)}>
						결제하기
					</Button>
				</div>
			</CartStyled>
		</>
	);
}

const OrderStyled = styled.div`

`;

export default Order;