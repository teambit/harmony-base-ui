import { RefObject, Component } from 'react';

export type ClickOutsideProps = {
	targetRef: RefObject<HTMLElement>;
	handler: (event: MouseEvent | TouchEvent) => void;
	enabled?: boolean;
};

/** triggers event which clicking outside of the the ref component. (React15 compatible!) */
export class ClickOutside extends Component<ClickOutsideProps> {
	static defaultProps: Partial<ClickOutsideProps> = {
		enabled: true,
	};

	private listener = (event: MouseEvent | TouchEvent) => {
		const { targetRef, handler } = this.props;

		const element = event.target as HTMLElement | null;
		// Do nothing if clicking ref's element or descendent elements
		if (!targetRef.current || !element || targetRef.current.contains(element)) {
			return;
		}

		handler(event);
	};

	componentDidMount() {
		if (this.props.enabled) {
			this.enable();
		}
	}

	componentWillUnmount() {
		this.disable();
	}

	componentDidUpdate(prevProps: ClickOutsideProps) {
		const nextProps = this.props;
		if (prevProps.enabled !== nextProps.enabled) {
			if (nextProps.enabled) {
				this.enable();
			} else {
				this.disable();
			}
		}
	}

	private enable() {
		document.addEventListener('mousedown', this.listener);
		document.addEventListener('touchstart', this.listener);
	}
	private disable() {
		document.removeEventListener('mousedown', this.listener);
		document.removeEventListener('touchstart', this.listener);
	}

	render() {
		return null;
	}
}
