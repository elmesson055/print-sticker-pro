import Barcode from "react-barcode";
import { LabelData } from "./LabelForm";

interface Label58x30Props {
  data: LabelData;
}

export const Label58x30 = ({ data }: Label58x30Props) => {
  return (
    <div 
      className="label-58x30 bg-[hsl(var(--label-bg))] border-2 border-[hsl(var(--label-border))] flex flex-col items-center justify-center p-2"
      style={{
        width: "58mm",
        height: "30mm",
      }}
    >
      <div className="text-[8px] font-bold text-[hsl(var(--label-text))] text-center uppercase mb-1 leading-tight">
        {data.productName}
      </div>
      <div className="flex-1 flex items-center justify-center">
        <Barcode
          value={data.barcode}
          width={1.2}
          height={35}
          fontSize={8}
          background="transparent"
          lineColor="#000000"
        />
      </div>
      <div className="text-[11px] font-bold text-[hsl(var(--label-text))] absolute bottom-1 right-2">
        R$ {data.price}
      </div>
    </div>
  );
};
