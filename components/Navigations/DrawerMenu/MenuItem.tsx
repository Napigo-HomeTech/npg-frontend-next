import React, { useCallback, useMemo } from "react";
import { Button, Text } from "@chakra-ui/react";
import { DrawerItem } from ".";
import Link from "next/link";
import { useRouter } from "next/router";

export const MenuItem: React.FC<DrawerItem> = ({
  name,
  displayText,
  icon,
  goto,
}) => {
  const { pathname } = useRouter();
  const activeMenuTextColor = "brand.500";
  const activeMenuBg = "blackAlpha.50";

  const isActive = useMemo(() => {
    return pathname.toLowerCase().includes(name.toLowerCase());
  }, [pathname, name]);

  const getOnActiveBorderProps = useCallback(() => {
    return {
      borderLeft: "solid",
      borderLeftColor: isActive ? "brand.500" : "transparent",
      borderLeftWidth: "5px",
    };
  }, [isActive]);

  return (
    <Button
      as={Link}
      href={goto}
      replace={pathname.includes(goto)}
      w="100%"
      variant="ghost"
      rounded="none"
      {...getOnActiveBorderProps()}
      bg={isActive ? activeMenuBg : undefined}
      color={isActive ? activeMenuTextColor : "text-hard"}
      leftIcon={React.cloneElement(icon, { size: 16 })}
      justifyContent="start"
      _hover={{
        bg: isActive ? activeMenuBg : "blackAlpha.50",
        color: isActive ? activeMenuTextColor : "text-hard",
      }}
      _active={{ bg: "transparent" }}
    >
      <Text ml="0px" fontWeight="medium">
        {displayText}
      </Text>
    </Button>
  );
};
