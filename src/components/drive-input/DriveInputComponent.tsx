import type { InputHTMLAttributes, SelectHTMLAttributes } from "react";

interface DriveFieldProps {
  label: string;
  wide?: boolean;
  children: React.ReactNode;
}

export const DriveFieldComponent = ({
  label,
  wide = false,
  children,
}: DriveFieldProps) => (
  <div className={`field${wide ? " wide" : ""}`}>
    <label>{label}</label>
    {children}
  </div>
);

interface DriveInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  wide?: boolean;
}

export const DriveInputComponent = ({
  label,
  wide = false,
  className = "",
  ...props
}: DriveInputProps) => (
  <DriveFieldComponent label={label} wide={wide}>
    <input className={`dg-input ${className}`.trim()} {...props} />
  </DriveFieldComponent>
);

interface DriveSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  wide?: boolean;
  options: { value: string; label: string }[];
}

export const DriveSelectComponent = ({
  label,
  wide = false,
  options,
  className = "",
  ...props
}: DriveSelectProps) => (
  <DriveFieldComponent label={label} wide={wide}>
    <select className={`dg-select ${className}`.trim()} {...props}>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  </DriveFieldComponent>
);
