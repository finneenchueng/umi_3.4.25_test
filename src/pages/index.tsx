import styles from './index.less';
import { $t } from '@/utils/locale';
import { EnumX } from '@/utils/types';

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <div>{$t('version')}</div>
      <div>{EnumX.C}</div>
    </div>
  );
}
