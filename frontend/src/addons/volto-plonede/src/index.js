import {
  HeroBlockSchemaEnhancer,
  ButtonBlockSchemaEnhancer,
  SliderBlockSchemaEnhancer,
} from 'volto-plonede/components';
import { defineMessages } from 'react-intl';

defineMessages({ Imprint: { id: 'Imprint', defaultMessage: 'Imprint' } });

const applyConfig = (config) => {
  config.settings = {
    ...config.settings,
    supportedLanguages: ['de', 'en'],
    defaultLanguage: 'de',
  };

  config.blocks.blocksConfig.hero = {
    ...config.blocks.blocksConfig.hero,
    schemaEnhancer: HeroBlockSchemaEnhancer,
  };

  config.blocks.blocksConfig.__button = {
    ...config.blocks.blocksConfig.__button,
    schemaEnhancer: ButtonBlockSchemaEnhancer,
  };

  config.blocks.requiredBlocks = [];
  config.settings = {
    ...config.settings,
    isMultilingual: false,
    supportedLanguages: ['de'],
    defaultLanguage: 'de',
  };

  config.blocks.blocksConfig.slider = {
    ...config.blocks.blocksConfig.slider,
    schemaEnhancer: SliderBlockSchemaEnhancer,
  };

  delete config.blocks.blocksConfig.text;
  config.blocks.blocksConfig.__grid.gridAllowedBlocks = [
    ...config.blocks.blocksConfig.__grid.gridAllowedBlocks,
    '__button',
  ];

  console.log(config.blocks.blocksConfig.slider);
  return config;
};

export default applyConfig;
