
export const FONT_SIZES = {
  sm: 14,      
  md: 16,      
  lg: 18,      
  xl: 20,     
  '2xl': 24,   
  '3xl': 28,   
  '4xl': 32,   
  '5xl': 36,  
  '6xl': 48,   
} as const;

export const FONT_WEIGHTS = {
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
} as const;

export const SPACING = {
  sm : 5,
  md : 10,
  lg : 15,
  xl : 20,
 '2xl': 25,
 '3xl': 30, 
} as const;


export const BORDER_RADIUS = {
  none: 0,
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  '2xl': 20,
  '3xl': 24,
  circle: 9999,
} as const;


export const TYPOGRAPHY = {

    heading: {
        fontSize: FONT_SIZES['3xl'],
        fontWeight: FONT_WEIGHTS.semibold,
    },
    subheading: {
        fontSize: FONT_SIZES.xl,
        fontWeight: FONT_WEIGHTS.normal,
    },
    contentTitle: {
        fontSize: FONT_SIZES.xl,
        fontWeight: FONT_WEIGHTS.semibold,
    },
    contentText: {
        fontSize: FONT_SIZES.md,
        fontWeight: FONT_WEIGHTS.normal,
    },
    detailTitle: {
        fontSize: FONT_SIZES.lg,
        fontWeight: FONT_WEIGHTS.semibold,
    },
    detailText: {
        fontSize: FONT_SIZES.sm,
        fontWeight: FONT_WEIGHTS.normal,
    },

} as const;


export const DETAIL_ITEM_COLOR =  
[
    "#4e9ccdff",
    "#f6d725ff",
    "#32CD32",
    "#FF6B6B",
    "#FF1493",
    "#00BFFF",
    "#FF8C00",
    "#FF00FF",
    "#9932CC",
    "#DC143C"
]

