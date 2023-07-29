import { FeatureFlag, useDemoOneFeatureFlagActions } from "./DemoOneFeatureFlagStore";

interface FeatureFlagSwitchProps {
	flag: FeatureFlag;
}

export const DemonOneFeatureFlagSwitch = ({ flag }: FeatureFlagSwitchProps) => {
	const { toggleFlag } = useDemoOneFeatureFlagActions();

	console.log("[DemonOneFeatureFlagSwitch] Flag = " + flag.name + " Enabled = " + flag.enabled);

	return (
		<div className='checkbox-wrapper'>
			<label>
				<input
					type='checkbox'
					checked={flag.enabled}
					onChange={(event) => toggleFlag(flag.name, event.currentTarget.checked)}
					className={flag.enabled ? "checked" : ""}
				/>
				<span>{flag.name}</span>
			</label>
		</div>
	);
};
