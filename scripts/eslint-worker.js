const path = require('path');
const { ESLint } = require('eslint');

async function run(data) {
  const {
    target,
    taskArgs
  } = data;

  // 关于 ESLint 的 Node.js API 使用可参阅 https://eslint.org/docs/latest/developer-guide/nodejs-api#eslint-class

  // 1. 获取根目录的 ESLint 配置
  const baseConfig = require(path.resolve(process.cwd(), '.eslintrc.js'));

  // 2. 初始化 ESLint 实例
  const shouldFix = taskArgs?.includes('--fix');
  const eslint = new ESLint({
    reportUnusedDisableDirectives: 'error',
    baseConfig,
    fix: shouldFix,
    cache: false,
    cwd: target.cwd,
  });

  // 3. 执行 Lint
  const results = await eslint.lintFiles(['./']);
  const formatter = await eslint.loadFormatter('stylish');
  const resultText = await formatter.format(results);

  // 4. 修改文件
  await ESLint.outputFixes(results);

  // 5. 输出结果
  if (resultText) {
    process.stdout.write(`${resultText}\n`);
  }

  // 6. 抛出错误
  const isFailed = results.some((r) => {
    return r.errorCount > 0;
  });

  if (isFailed) {
    throw new Error('Linting failed with errors');
  }
}

module.exports = run;
