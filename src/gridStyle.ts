interface Config {
  columns: {
    [key: string]: {
      breakpoint: number;
      columns: number;
    };
  };
  containers: {
    breakpoint: number;
    containerWidth: number;
  }[];
}

const configs: Config = {
  columns: {
    xl: {
      breakpoint: 1200,
      columns: 12,
    },
    lg: {
      breakpoint: 992,
      columns: 12,
    },
    sm: {
      breakpoint: 768,
      columns: 12,
    },
  },
  containers: [
    {
      breakpoint: 768,
      containerWidth: 720,
    },
    {
      breakpoint: 992,
      containerWidth: 960,
    },
    {
      breakpoint: 1200,
      containerWidth: 1140,
    },
    {
      breakpoint: 1400,
      containerWidth: 1320,
    },
  ],
};

const gridCss = () => {
  let css = ``;

  //default
  for (let i = 1; i <= 12; i++) {
    css += `
        .col-${i} {
                flex: 0 0 auto;
                max-width: ${(100 / 12) * i}%;
            }
        
            .mb-${i} {
                margin-bottom: ${0.25 * i}rem !important;
            }
    
            .mt-${i} {
                margin-top: ${0.25 * i}rem !important;
            }
    
            .ml-${i} {
                margin-left: ${0.25 * i}rem !important;
            }
    
            .mr-${i} {
                margin-right: ${0.25 * i}rem !important;
            }
    
            .m-${i} {
                margin: ${0.25 * i}rem !important;
            }
        `;
  }

  //responsive
  for (let k in configs.columns) {
    const config = configs.columns[k];
    css += `@media (min-width: ${config.breakpoint}px) {`;
    for (let i = 1; i <= config.columns; i++) {
      css += `
            .col-${k}-${i} {
                flex: 0 0 auto;
                max-width: ${(100 / config.columns) * i}%;
            }
        `;
    }
    css += `}`;
  }

  //container
  for (let k in configs.containers) {
    const config = configs.containers[k];
    css += `
    
    .container,
    .container-lg,
    .container-md,
    .container-sm,
    .container-xl {
        width: 100%;
        margin-left: auto;
        margin-right: auto;
    }

    @media (min-width: ${config.breakpoint}px) {`;
    css += `
        .container,
        .container-lg,
        .container-md,
        .container-sm,
        .container-xl {
            max-width: ${config.containerWidth}px;
        }
        
    `;
    css += `}`;
  }

  return css;
};

export default gridCss;
