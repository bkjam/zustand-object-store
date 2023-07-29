import { useDemoTwoFeatureFlag, useDemoTwoFeatureFlagActions } from "./DemoTwoFeatureFlagStore";

interface FeatureFlagSwitchProps {
	flag: string;
}

export const DemoTwoFeatureFlagSwitch = ({ flag }: FeatureFlagSwitchProps) => {
	const { toggleFlag } = useDemoTwoFeatureFlagActions();
	const isEnabled = useDemoTwoFeatureFlag(flag);

	console.log("[DemoTwoFeatureFlagSwitch] Flag = " + flag + " Enabled = " + isEnabled);

	return (
		<div className='checkbox-wrapper'>
			<label>
				<input
					type='checkbox'
					checked={isEnabled}
					onChange={(event) => toggleFlag(flag, event.currentTarget.checked)}
					className={isEnabled ? "checked" : ""}
				/>
				<span>{flag}</span>
			</label>
		</div>
	);
};
