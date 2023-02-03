import { SectionGapContainer } from "./SectionGap.styled";

const SectionGap: React.FC<{ gap: number }> = ({ gap }) => {
  return (
    <SectionGapContainer gap={gap}/>
  );
}
 
export default SectionGap;