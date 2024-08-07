import { useCallback } from "react";
import { Range as RangeLib } from "react-range";
import type { IRenderTrackParams } from "react-range/lib/types";

import { renderThumb, renderTrack as renderTrackEnhanced } from "./render";

type RangeProps = {
  className?: string;
  min: number;
  max: number;
  value: number;
  onChange?: (value: number) => void;
};

export function Range({ className, onChange, min, max, value }: RangeProps) {
  const onChangeValue = useCallback((values: number[]) => onChange?.(values[0]), [onChange]);

  const renderTrack = useCallback(
    ({ props, children }: IRenderTrackParams) => {
      const scale = value / max;
      return renderTrackEnhanced({ props, children, scale });
    },
    [max, value]
  );

  return (
    <div className={["flex items-center gap-4", className].filter(Boolean).join(" ")}>
      <RangeLib
        disabled={!onChange}
        values={[value]}
        min={min}
        max={max}
        step={1}
        onChange={onChangeValue}
        renderThumb={renderThumb}
        renderTrack={renderTrack}
      />
      <div className="text-xl text-right w-4">{value}</div>
    </div>
  );
}
