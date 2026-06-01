"use client"
import { useLocale } from "next-intl";
import { useMemo } from "react";

const useLocalization = () => {
    const locale = useLocale();
    const isRtl = useMemo(() => locale === "ar", [locale]);

    const formatNumber = (num: number, options?: Intl.NumberFormatOptions): string => {
        if (isRtl) {
            return new Intl.NumberFormat("ar-EG", { useGrouping: false, ...options }).format(num)
        }
        if (options) {
            return new Intl.NumberFormat("en-US", { useGrouping: false, ...options }).format(num)
        }
        return num.toString()
    }
    const currentTime = new Intl.DateTimeFormat(
        locale === "ar" ? "ar-EG" : "en-US",
        {
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
        }
    ).format(new Date());

    return {
        isRtl,
        formatNumber,
        currentTime
    }
}

export default useLocalization