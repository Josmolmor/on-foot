import { ChangeEvent } from "react";

type Props = {
  label?: string;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
};

export default Props;
