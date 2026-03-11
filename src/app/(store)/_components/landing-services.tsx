import {
	IconBuildingStore,
	IconCreditCard,
	IconReceiptRefund,
	IconTruckDelivery,
} from '@tabler/icons-react'
import { css } from 'panda/css'

const ServiceCard = ({ children }: { children: React.ReactNode }) => {
	return (
		<div
			className={css({
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				backgroundColor: { base: 'neutral.100', _osDark: 'neutral.900' },
				padding: 4,
				gap: 2,
				borderRadius: 'xl',
			})}
		>
			{children}
		</div>
	)
}

export const LandingServices = () => {
	const IconSize = 36

	return (
		<div
			className={css({
				display: 'grid',
				gridTemplateColumns: 'repeat(4, 1fr)',
				gap: 4,
				paddingInline: 4,
				marginTop: 8,
				fontSize: 'xs',
				textAlign: 'center',
				lg: {
					gridTemplateColumns: 'repeat(4, 1fr)',
				},
			})}
		>
			<ServiceCard>
				<IconTruckDelivery size={IconSize} />
				<p>Envío Gratis</p>
			</ServiceCard>
			<ServiceCard>
				<IconBuildingStore size={IconSize} />
				<p>Compra en Tienda</p>
			</ServiceCard>
			<ServiceCard>
				<IconCreditCard size={IconSize} />
				<p>Pago en Cuotas</p>
			</ServiceCard>
			<ServiceCard>
				<IconReceiptRefund size={IconSize} />
				<p>Devolución y Reembolso</p>
			</ServiceCard>
		</div>
	)
}
