import { LayoutForm } from '../layout-form/LayoutForm';

import styles from './Range.module.css';

export function Range(props: {
  className?: string;
  label: string;
  min: number;
  max: number;
  value: number;
  onChange: (value: number) => void;
}) {
  return (
    <LayoutForm label={props.label}>
      <div className="relative flex items-center gap-4 w-full">
        <div className="relative flex-1">
          <span
            className={styles.progress}
            style={{ width: `calc(${((props.value - props.min) / props.max) * 100}% + 0.5em)` }}
          />
          <input
            className={['flex-1', styles.range, 'glob-range'].join(' ')}
            value={props.value}
            type="range"
            min={props.min}
            max={props.max}
            onChange={(e) => props.onChange(parseInt(e.target.value))}
          />
        </div>
        <div className={['w-6 flex justify-end', 'text-2xl'].join(' ')}>{props.value}</div>
      </div>
    </LayoutForm>
  );
}
