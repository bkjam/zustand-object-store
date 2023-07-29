import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export type FeatureFlag = {
	name: string;
	enabled: boolean;
};

export type FeatureFlagActions = {
	toggleFlag: (flag: string, enabled: boolean) => void;
	initFlags: (flags: string[]) => void;
};

interface FeatureFlagStore {
	flags: Record<string, FeatureFlag>;
	actions: FeatureFlagActions;
}

export const useFeatureFlagStore = create(
	immer<FeatureFlagStore>((set) => ({
		flags: {},
		actions: {
			toggleFlag: (flag: string, enabled: boolean) => {
				set((state) => {
					if (flag in state.flags) {
						state.flags[flag].enabled = enabled;
					}
				});
			},
			initFlags: (flags: string[]) => {
				set((state) => {
					state.flags = flags.reduce(
						(acc, flag) => Object.assign(acc, { [flag]: { name: flag, enabled: false } }),
						{}
					);
				});
			},
		},
	}))
);

export const useDemoOneFeatureFlagActions = () => useFeatureFlagStore((state) => state.actions);
export const useDemoOneFeatureFlags = () => useFeatureFlagStore((state) => state.flags);
export const useDemoOneFeatureFlag = (flag: string) => {
	const featureFlag = useFeatureFlagStore((state) => state.flags[flag]);

	if (featureFlag === undefined) {
		console.error("Feature Flag " + flag + " is not found!");
	} else {
		return featureFlag.enabled;
	}
};
