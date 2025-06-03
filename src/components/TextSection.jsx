import { Text } from "@react-three/drei";
import { fadeOnBeforeCompileFlat } from "../utils/fadeMaterial";
import { useLanguage } from "../translations/LanguageContext";
import { useCallback } from "react";

export const TextSection = ({ title, subtitle, isLink = false, sectionKey, ...props }) => {
  const { t } = useLanguage();
  
  // Handle click for clickable sections
  const handleClick = useCallback(() => {
    if (isLink) {
      // Open link in a new tab
      window.open('https://mkthings.github.io/blog', '_blank');
    }
  }, [isLink]);

  // Get translated text
  const translatedTitle = sectionKey ? t(`sections.${sectionKey}.title`) : title;
  const translatedSubtitle = sectionKey ? t(`sections.${sectionKey}.subtitle`) : subtitle;
  
  return (
    <group {...props} onClick={handleClick} style={{ cursor: isLink ? 'pointer' : 'default' }}>
      {!!translatedTitle && (
        <Text
          color="white"
          anchorX={"left"}
          anchorY="bottom"
          fontSize={0.52}
          maxWidth={2.5}
          lineHeight={1}
          font={"./fonts/DMSerifDisplay-Regular.ttf"}
        >
          {translatedTitle}
          <meshStandardMaterial
            color={isLink ? "#8af" : "white"}
            onBeforeCompile={fadeOnBeforeCompileFlat}
          />
        </Text>
      )}

      <Text
        color="white"
        anchorX={"left"}
        anchorY="top"
        fontSize={0.2}
        maxWidth={2.5}
        font={"./fonts/Inter-Regular.ttf"}
      >
        {translatedSubtitle}
        <meshStandardMaterial
          color={"white"}
          onBeforeCompile={fadeOnBeforeCompileFlat}
        />
      </Text>
      
      {/* Not add a visual indicator for clickable sections */}
      {isLink && (
        <Text
          color="#8af"
          anchorX={"left"}
          anchorY="top"
          position={[0, -0.6, 0]}
          fontSize={0.15}
          maxWidth={2.5}
          font={"./fonts/Inter-Regular.ttf"}
        >
          {/* Not add a visual indicator for clickable sections */}
          <meshStandardMaterial
            color={"#8af"}
            onBeforeCompile={fadeOnBeforeCompileFlat}
          />
        </Text>
      )}
    </group>
  );
};