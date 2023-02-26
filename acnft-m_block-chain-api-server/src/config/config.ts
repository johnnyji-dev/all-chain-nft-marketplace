import { readFileSync } from "fs";
import * as yaml from "js-yaml";
import { join } from "path";

const MAIN_CONFIG_YAML = 'main_fns_info.yaml';
const TEST_CONFIG_YAML = 'test_fns_info.yaml';

export default () => {
    return yaml.load(
        (process.env.NODE_NET_ENV === 'MAINNET') ?
            readFileSync(join(__dirname, MAIN_CONFIG_YAML), 'utf8')
            : readFileSync(join(__dirname, TEST_CONFIG_YAML), 'utf8')
    ) as Record<string, any>;
};