import Barcode from "react-barcode";
import { LabelData } from "./LabelForm";

interface Label50x50Props {
  data: LabelData;
}

export const Label50x50 = ({ data }: Label50x50Props) => {
  return (
    <div 
      className="label-50x50 bg-[hsl(var(--label-bg))] border-2 border-[hsl(var(--label-border))] flex flex-col p-2"
      style={{
        width: "50mm",
        height: "50mm",
      }}
    >
      <div className="text-[8px] font-bold text-[hsl(var(--label-text))] text-center uppercase mb-1 leading-tight">
        {data.productName}
      </div>
      
      <div className="flex-1 flex items-center justify-center">
        <Barcode
          value={data.barcode}
          width={1}
          height={40}
          fontSize={8}
          background="transparent"
          lineColor="#000000"
        />
      </div>
      
      <div className="grid grid-cols-2 gap-1 text-[9px] text-[hsl(var(--label-text))] mt-1">
        <div>
          <span className="font-bold">QTDE:</span> {data.quantity}
        </div>
        <div className="text-right">
          <span className="font-bold">VAL:</span> {data.expiry}
        </div>
      </div>
      
      <div className="flex justify-between items-center mt-1">
        <span className="text-[9px] font-medium text-[hsl(var(--label-text))]">
          Litro
        </span>
        <span className="text-[11px] font-bold text-[hsl(var(--label-text))]">
          R$ {data.price}
        </span>
      </div>
    </div>
  );
};
