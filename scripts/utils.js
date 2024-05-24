import { execSync } from 'child_process'

export function cmd(command) {
    execSync(command, { stdio: 'inherit' });
}