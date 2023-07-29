import { DemonOneFeatureFlagSwitch, useDemoOneFeatureFlagActions, useDemoOneFeatureFlags } from "./featuretogglesone";
import { DemoTwoFeatureFlagSwitch, useDemoTwoFeatureFlagActions, useDemoTwoFeatureFlags } from "./featuretogglestwo";
import "./App.css";

const OriginalDemoOne = () => {
	const flags = useDemoOneFeatureFlags();
	return (
		<div className='card'>
			{Object.keys(flags).map((flag) => {
				const featureFlag = flags[flag];
				return <DemonOneFeatureFlagSwitch key={flag} flag={featureFlag} />;
			})}
		</div>
	);
};

const ImprovedDemoTwo = () => {
	const flags = useDemoTwoFeatureFlags();
	return (
		<div className='card'>
			{flags.map((flag) => (
				<DemoTwoFeatureFlagSwitch key={flag} flag={flag} />
			))}
		</div>
	);
};

const App = () => {
	const { initFlags: initDemoOneFlags } = useDemoOneFeatureFlagActions();
	const { initFlags: initDemoTwoFlags } = useDemoTwoFeatureFlagActions();
	const demoOneFlags = ["Flag A", "Flag B", "Flag C"];
	const demoTwoFlags = ["Flag 1", "Flag 2", "Flag 3"];
	initDemoOneFlags(demoOneFlags);
	initDemoTwoFlags(demoTwoFlags);

	console.log("Loading App");

	return (
		<>
			<h1>Zustand + React Object Array Updates</h1>
			<h3>Original: Rerendering the entire array of objects</h3>
			<OriginalDemoOne />
			<h3>Improved: Rerendering the affected object only</h3>
			<ImprovedDemoTwo />
		</>
	);
};

export default App;
